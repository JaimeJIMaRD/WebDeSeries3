<?php

// En el modelo Lista.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lista extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
    ];

    public function biblioteca()
    {
        return $this->belongsTo(Biblioteca::class,"biblioteca_id");
    }

    public function series()
    {
        return $this->belongsToMany(Serie::class);
    }

}
