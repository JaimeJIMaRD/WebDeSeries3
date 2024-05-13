<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Biblioteca;
use App\Models\Lista;
use App\Models\Serie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class ListasController extends Controller
{
    public function show($listaId)
    {
        $lista = Lista::findOrFail($listaId)->load("series");
        return response()->json($lista);
    }


    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string',
        ]);

        $user = Auth::user();
        $biblioteca = Biblioteca::where('user_id', $user->id)->first();

        if ($biblioteca) {
            $lista = new Lista();
            $lista->nombre = $request->input('nombre');
            $lista->biblioteca_id = $biblioteca->id;
            $lista->biblioteca()->associate($biblioteca);
            $biblioteca->listas()->save($lista);
            return redirect()->back()->with('success', 'Lista creada con éxito');
        } else {
            return redirect()->back()->with('error', 'No se pudo encontrar la biblioteca del usuario.');
        }
    }


    public function update(Request $request, Lista $lista)
    {
        $request->validate([
            'nuevo_nombre' => 'required|string',
        ]);
        $lista->update(['nombre' => $request->input('nuevo_nombre')]);
        return redirect()->back()->with('success', 'Nombre de la lista actualizado con éxito');
    }
    public function destroy(Lista $lista)
    {
        $lista->series()->detach();
        $lista->delete();
        return redirect()->route('bibliotecas.index')->with('success', 'Lista eliminada con éxito');
    }
    public function quitarSerie(Lista $lista, Serie $serie)
    {
        $lista->series()->detach($serie->id);
        return redirect()->back()->with('success', 'Serie quitada de la lista con éxito');
    }

}


