<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Validator;


class BoardController extends Controller
{

    public function all()
    {
        Log::info('Retrieving all boards');
        return response()->json(Board::with('pins')->get());
    }

    public function getById($id)
    {
        Log::info('Retrieving board with id: '.$id);
        return response()->json(Board::with('pins')->findOrFail($id));
    }

    public function getByUser($userId)
    {
        Log::info('Retrieving boards with user id: '.$userId);
        $boards = Board::where('user_id', $userId)->get();
        return response()->json($boards);
    }

    public function create(Request $request)
    {
        $boardValidator = Validator::make($request->all(),[
            'name'=>['required','string','max:255'],
            'description'=>['required','string','max:255'],
            'user_id'=>['required','integer']
        ]);

        if($boardValidator->fails()){
            $code = Response::HTTP_NOT_ACCEPTABLE;//406
            return response()->json(['code'=>$code], $code);
        }

        $board = Board::create([
            'name'=>$request->name,
            'description'=>$request->description,
            'user_id'=>$request->user_id,
        ]);
        $board->save();
        return response()->json("Created", 201);
    }

    public function updateById(Request $request, $id) {
        Log::info("Update board with id" .$id);

        $board = Board::where('id', $id);
        if ($board->count() == 0) {
            $code = Response::HTTP_NOT_ACCEPTABLE;//406
            return response()->json(['error'=>'Board not found','code'=>$code], $code);
        }


        $board = Board::where('id', $id)->first();
        $dataFromTheBoardUpdated = $request->all();
        $board->update($dataFromTheBoardUpdated);
        return response()->json($board);
    }

    public function delete($id){
        $board = Board::where('id', $id)->first();
        $board->delete();
        return response()->json('Board deleted');
    }
}
