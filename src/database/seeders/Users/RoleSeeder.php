<?php

namespace Database\Seeders\Users;

use Illuminate\Database\Seeder;
use App\Models\Users\Role;
use \App\Models\User;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin_role  = Role::firstOrCreate(
            ['keyname' => 'admin'],
            ['name' => 'Admin']
        );

        User::where('username', 'anakin')->select('id')->first()->roles()->sync($admin_role->id);

        $jedi_role  = Role::firstOrCreate(
            ['keyname' => 'jedi'],
            ['name' => 'Jedi']
        );

        User::where('username', 'luke')->select('id')->first()->roles()->sync($jedi_role->id);

        $clone_role  = Role::firstOrCreate(
            ['keyname' => 'clone'],
            ['name' => 'Clone']
        );
    }
}

