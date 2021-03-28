<?php

namespace Tests\Feature\Api;

use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class ViewUserTest extends TestCase
{
    /** @test */
    public function requesting_an_invalid_user_triggers_model_not_found_exception()
    {

        $user = User::first();
        $id = 3;
        $response = $this->actingAs($user)
            ->json('GET', "/api/v1/users/{$id}");
        $response->assertStatus(404);
        $response->assertHeader('Content-Type', 'application/json');
        $response->assertJson([
            'message' => "No query results for model [App\\Models\\User] {$id}"
        ]);
    }
    /** @test */
    public function invalid_user_uri_triggers_fallback_route()
    {
        $user = User::first();
        $response = $this->actingAs($user)
            ->json('GET', '/api/v1/users/invalid-user-id');
        $response->assertStatus(404);
        $response->assertHeader('Content-Type', 'application/json');
        $response->assertJson([
            'message' => 'Not Found.'
        ]);
    }

    /** @test */
    public function guests_can_view_a_valid_user()
    {
        $user = User::first();

        $response = $this->actingAs($user)
            ->json('GET', "/api/v1/users/{$user->id}");
        $response->assertOk();
        $response->assertJson([
            'data' => [
                'name' => $user->name,
                'email' => $user->email,
            ]
        ]);
    }
}
