<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\DocumentModel;
use MongoDB\Laravel\Eloquent\Model;

class SocioCulturalOfficer extends Model
{
    use HasFactory;
    use DocumentModel;
    
    protected $table = 'socio-cultural-events';

    protected $primaryKey = 'id';
    protected $keyType = 'string';

    protected $fillable = [
        'fullName',
        'position',
        'imageLink',
    ];
}
