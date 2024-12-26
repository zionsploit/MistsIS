<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\DocumentModel;
use MongoDB\Laravel\Eloquent\Model;

class SocioCultural extends Model
{
    use HasFactory;
    use DocumentModel;

    protected $table = 'socio-cultural';

    protected $primaryKey = 'id';
    protected $keyType = 'string';

    protected $fillable = [
        'title',
        'description',
        'date',
        'type',
        'imageLink',
    ];
}
