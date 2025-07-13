<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NewsContent extends Model
{
    protected $table = 'news_content';

    protected $fillable = [
        'news_id',
        'type',
        'content',
        'caption',
        'indexing'
    ];

    public function news()
    {
        return $this->belongsTo(News::class, 'news_id', 'id');
    }
}
