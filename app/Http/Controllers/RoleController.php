<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Http\Resources\RoleResource;
use App\Models\User;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia()->render('Roles/Index', [
            'roles' => RoleResource::collection(Role::with(['permissions','users'])->orderBy('name')->get())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia()->render('Roles/Create', [
            'permissions' => $this->getAllPermissions()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoleRequest $request)
    {
        try {
            $role = Role::create([
                'name' => $request->name
            ]);

            $role->syncPermissions($request->role_permissions);

            session()->flash('success', $role->name.' Role created successfully');

        } catch(\Exception $e) {
            session()->flash('error', $e->getMessage());
            return redirect()->back()->withInput();
        }

        return redirect()->route('roles.index', $page.props.tenant_domain);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        return inertia()->render('Roles/Edit', [
            'role' => new RoleResource($role),
            'role_permissions' => $role->permissions->pluck('name'),
            'permissions' => $this->getAllPermissions()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, Role $role)
    {
        try {

            $role->update([
                'name' => $request->name
            ]);

            $role->syncPermissions($request->role_permissions);

            session()->flash('success', $role->name.' Role updated successfully');

        } catch(\Exception $e) {
            session()->flash('error', $e->getMessage());
            return redirect()->back()->withInput();
        }

        return redirect()->route('roles.index', $page.props.tenant_domain);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        try {

            $role->delete();
            session()->flash('success', $role->name.' Role deleted successfully');

        } catch(\Exception $e) {
            session()->flash('error', $e->getMessage());
        }
        return redirect()->route('roles.index', $page.props.tenant_domain);
    }

    protected function getAllPermissions()
    {
        return Permission::all()->groupBy(function (&$item, int $key) {
            $name_parts = explode(' ', $item->name);
            return Str::of(ucfirst($name_parts[0]))->plural();
        })->sortKeys();
    }

}
