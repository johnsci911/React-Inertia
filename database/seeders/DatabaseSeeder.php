<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'johnkarlo.315@gmail.com'],
            [
                'name' => 'John Karlo Cachero',
                'password' => 'password',
                'email_verified_at' => now(),
            ]
        );

        $this->call(PuppySeeder::class);
    }
}
