<?php

namespace App\Http\Controllers;

use App\Models\Serie;
use Illuminate\Http\Request;

class SeriesController extends Controller{
public function index()
{
$series = Serie::all();
return response()->json($series);
}

public function show($id)
{
$serie = Serie::find($id);
if (!$serie) {
return response()->json(['error' => 'Serie no encontrada'], 404);
}
return response()->json($serie);
}

public function store(Request $request)
{
$request->validate([
'nombre' => 'required|string',
'temporadas' => 'required|integer',
'sinopsis' => 'required|string',
'genero1' => 'required|string',
'genero2' => 'nullable|string',
'nota' => 'required|numeric',
'foto' => 'required|string',
]);

$serie = Serie::create($request->all());

return response()->json($serie, 201);
}

public function update(Request $request, $id)
{
$request->validate([
'nombre' => 'required|string',
'temporadas' => 'required|integer',
'sinopsis' => 'required|string',
'genero1' => 'required|string',
'genero2' => 'nullable|string',
'nota' => 'required|numeric',
'foto' => 'required|string',
]);

$serie = Serie::find($id);
if (!$serie) {
return response()->json(['error' => 'Serie no encontrada'], 404);
}
$serie->update($request->all());

return response()->json($serie, 200);
}

public function destroy($id)
{
$serie = Serie::find($id);
if (!$serie) {
return response()->json(['error' => 'Serie no encontrada'], 404);
}
$serie->delete();

return response()->json(null, 204);
}
}
