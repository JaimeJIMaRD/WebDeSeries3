<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BibliotecasController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $biblioteca = $user->biblioteca()->with('listas')->first();
        return response()->json( $biblioteca);
    }
}
