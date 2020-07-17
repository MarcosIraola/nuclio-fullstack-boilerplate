<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pin extends Model
{

    protected $fillable = [
        'note', 'color', 'media_url', 'board_id'
    ];

    public function board()
    {
        return $this->belongsTo('App\Board');
    }
}
