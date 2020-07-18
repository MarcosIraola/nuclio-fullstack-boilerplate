<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Validator;

class UserController extends Controller
{

    public function all()
    {
        Log::info('Retrieving all user profiles');
        return response()->json(User::with('boards')->get());
    }

    public function getById($id)
    {
        Log::info('Retrieving user profile for user: '.$id);
        return response()->json(User::findOrFail($id));
    }

    public function getByEmail($email)
    {
        Log::info('Retrieving user profile for user: '.$email);
        return response()->json(User::where('email', $email) -> first());
    }

    public function getByUsername($username)
    {
        Log::info('Retrieving user profile for user: '.$username);
        return response()->json(User::where('username', $username) -> first());
    }

    public function create(Request $request)
    {
        $userValidator = Validator::make($request->all(),[
            'first_name'=>['required', 'string', 'max:255'],
            'last_name'=>['required', 'string', 'max:255'],
            'email'=>['required', 'string', 'max:255'],
            'username'=>['required', 'string', 'max:255'],
            'password'=>['required', 'string', 'max:255'],
        ]);

        if ($userValidator->fails()){
            $code = Response::HTTP_NOT_ACCEPTABLE;//406
            return response()->json(['code'=>$code], $code);
        }

        $user = User::create([
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'email'=>$request->email,
            'username'=>$request->username,
            'bio'=>$request->bio,
            'password' => bcrypt($request['password'])
        ]);

        $user->save();
        return response()->json('saved', 201);
    }

    public function updateById(Request $request, $id) {
        Log::info("Update user with id" .$id);
        $user = User::where('id', $id)->first();
        $dataFromTheUserUpdated = $request->all();
        $user->update($dataFromTheUserUpdated);
        return response()->json($user);
    }

    public function delete($id){
        $user = User::where('id', $id)->first();
        $user->delete();
        return response()->json('User deleted');
    }

}
