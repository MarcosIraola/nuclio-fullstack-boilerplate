<?php


namespace App\Services;

use App\Pin;

class SearchPinService
{
    public function searchPinsByNoteAndColor ($query = ''){
        $pins = Pin::where('color', 'LIKE', '%' . $query . '%')
            ->orWhere('note', $query)->get();
        return response()->json($pins);
    }

}
