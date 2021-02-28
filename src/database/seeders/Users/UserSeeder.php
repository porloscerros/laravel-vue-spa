<?php

namespace Database\Seeders\Users;

use Illuminate\Database\Seeder;
use App\Models\User;
use \Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::firstOrCreate(
            [ 'username' => 'anakin' ],
            [
                'name' => 'Anakin Skywalker',
                'username' => 'anakin',
                'email' => 'darthvader@deathstar.ds',
                'password' => Hash::make('4nak1n'),
                'email_verified_at' => now()
            ]
        );
        User::firstOrCreate(
            [ 'username' => 'luke' ],
            [
                'name' => 'Luke Skywalker',
                'username' => 'luke',
                'email' => 'luke@jedi.force',
                'password' => Hash::make('T4too1ne'),
                'email_verified_at' => now()
            ]
        );
        // \App\Models\User::factory(10)->create();
    }
}
