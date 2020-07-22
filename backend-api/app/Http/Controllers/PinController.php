<?php

namespace App\Http\Controllers;

use App\Pin;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Validator;

class PinController extends Controller
{

    public function all()
    {
        Log::info('Retrieving all pins');
        return response()->json(Pin::all());
    }


    public function getById($id)
    {
        Log::info('Retrieving pin with id: '.$id);
        return response()->json(Pin::findOrFail($id));
    }

    public function GetByBoard($boardId)
    {
        Log::info('Retrieving pins with board id: '.$boardId);
        $pins = Pin::where('board_id', $boardId)->get();
        return response()->json($pins);
    }

    public function create(Request $request)
    {
        $pinValidator = Validator::make($request->all(),[
            'note'=>['required', 'string', 'max:255'],
            'media_url'=>['required', 'string', 'max:255'],
            'board_id'=>['required', 'integer']
        ]);

        if($pinValidator->fails()){
            $code = Response::HTTP_NOT_ACCEPTABLE;//406
            return response()->json(['code'=>$code], $code);
        }

        $pin = Pin::create([
            'note' => $request->note,
            'media_url' => $request->media_url,
            'board_id' => $request->board_id,
        ]);

        $pin->save();
        return response()->json("Created", 201);
    }

    public function updateById(Request $request, $id) {
        Log::info("Update pin with id" .$id);
        $pin = Pin::where('id', $id)->first();
        $dataFromThePinUpdated = $request->all();
        $pin->update($dataFromThePinUpdated);
        return response()->json($pin);
    }

    public function delete($id){
        $pin = Pin::where('id', $id)->first();
        $pin->delete();
        return response()->json('Pin deleted');
    }

    public function searchPinsByNoteAndColor ($query = ''){
        $pins = Pin::where('color', 'LIKE', '%' . $query . '%')
            ->orWhere('note', $query)
            ->get();
        return response()->json($pins);
    }
}
