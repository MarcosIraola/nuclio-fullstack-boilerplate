<?php


namespace Tests\Unit;


use App\User;

class UserTest extends BaseTestCase
{
    public function testUserCount() {
        // When
        $usersCount = User::all()->count();

        // Then
        $this->assertTrue($usersCount == 2);
    }

    /**
     * Test when adding a user
     *
     * @return void
     */

    public function testUserAddition()
    {
        // Given
        $userData = [
            'email' => 'testing@test.co',
            'username' => 'testing',
            'first_name' => 'test_first',
            'last_name' => 'test_last',
            'avatar' => 'some avatar url',
            'password' => bcrypt('someRandomPassword'),
        ];
        // When
        User::create($userData);
        // Then
        $this->assertTrue(User::all()->count() == 3);
        $this->assertTrue(User::all()->last()->email == 'testing@test.co');
    }

}
