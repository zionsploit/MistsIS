<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\DocumentModel;
use MongoDB\Laravel\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;
    use DocumentModel;

    protected $table = 'announcement';

    protected $primaryKey = 'id';
    protected $keyType = 'string';

    protected $fillable = [
        "title",
        "description",
        "date",
        "imageLink"
    ];
}
