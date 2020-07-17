<?php


namespace App\Http\Controllers;


use App\Pin;

class SearchController extends Controller
{
    public function searchPinsByNoteAndColor ($query = ''){
        $pins = Pin::where('color', 'LIKE', '%' . $query . '%')
            ->orWhere('note', $query)
            ->get();
        return response()->json($pins);
    }

}
