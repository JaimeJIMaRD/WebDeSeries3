<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BibliotecasController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $biblioteca = $user->biblioteca()->with('listas')->first();
        return response()->json(['biblioteca' => $biblioteca]);
    }
}
