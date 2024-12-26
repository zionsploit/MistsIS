<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\DocumentModel;
use MongoDB\Laravel\Eloquent\Model;

class Account extends Model
{
    use HasFactory;
    use DocumentModel;

    protected $table = 'accounts';

    protected $primaryKey = 'id';
    protected $keyType = 'string';

    protected $fillable = [
        'firstName',
        'middleName',
        'lastName',
        'username',
        'password',
    ];
}
