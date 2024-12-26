<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\DocumentModel;
use MongoDB\Laravel\Eloquent\Model;

class ESportsOfficer extends Model
{
    use HasFactory;
    use DocumentModel;

    protected $table = 'e-sports-officer';

    protected $primaryKey = 'id';
    protected $keyType = 'string';

    protected $fillable = [
        'fullName',
        'position',
        'imageLink',
    ];
}
