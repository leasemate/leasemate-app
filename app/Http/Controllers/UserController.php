<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia()->render('Users/Index', [
            'users' => User::with('roles')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia()->render('Users/Create', [
            'roles' => $this->getRoles(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        try {

            $user = User::create([
                ...$request->validated(),
                'password' => bcrypt('password'),
            ]);

            $user->syncRoles($request->user_roles);

            session()->flash('success', $user->name.' User created successfully');

        } catch(\Exception $e) {
            session()->flash('error', $e->getMessage());
            return redirect()->back()->withInput();
        }

        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia()->render('Users/Edit', [
            'user' => $user,
            'user_roles' => $user->roles->pluck('name')->toArray(),
            'roles' => $this->getRoles(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        try {

            $user->update($request->validated());

            $user->syncRoles($request->user_roles);

            session()->flash('success', $user->name.' User updated successfully');

        } catch(\Exception $e) {
            session()->flash('error', $e->getMessage());
            return redirect()->back()->withInput();
        }

        return redirect()->route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        try {

            $user->delete();

            session()->flash('success', $user->name.' User deleted successfully');

        } catch(\Exception $e) {
            session()->flash('error', $e->getMessage());
        }

        return redirect()->route('users.index');
    }

    protected function getRoles()
    {
        return Role::all();
    }
}
