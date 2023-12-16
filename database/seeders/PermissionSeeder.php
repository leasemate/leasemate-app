<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $current_permissions = Permission::pluck('name');
        $new_permissions = collect();

        foreach (config('permission.permissions') as $group => $actions) {
            foreach ($actions as $action) {
                $permissionName = $group . ' ' . $action;
                $new_permissions->push($permissionName);
            }
        }

        //permissions to delete...
        $permissions_to_delete = $current_permissions->diff($new_permissions);

        Permission::whereIn('name', $permissions_to_delete)->delete();

        $permissions_to_add = $new_permissions->diff($current_permissions);

        foreach ($permissions_to_add as $permission) {
            Permission::create(['name' => $permission]);
        }

    }
}
