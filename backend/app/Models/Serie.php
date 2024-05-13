<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Serie extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'temporadas',
        'sinopsis',
        'genero1',
        'genero2',
        'nota',
        'foto',
    ];

    public function listas()
    {
        return $this->belongsToMany(Lista::class);
    }
}
