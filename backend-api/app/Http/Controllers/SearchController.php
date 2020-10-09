<?php


namespace App\Http\Controllers;


use App\Services\SearchPinService;
use Illuminate\Support\Facades\Log;

class SearchController extends \Illuminate\Routing\Controller
{

    protected $searchService;

    public function __construct (SearchPinService $searchService) {
        $this->searchService = $searchService;
    }

    public function search ($query) {
        Log::info('Retrieving all pins related to -> ' . $query);
        $pins = $this->searchService->search($query);

        Log::info('Retrieving query -> ' . $pins);
        return response()->json($pins);
    }

}
