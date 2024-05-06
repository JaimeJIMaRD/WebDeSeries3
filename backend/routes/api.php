<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BibliotecasController;
use App\Http\Controllers\ListasController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SeriesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('me', 'me');
});
Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
Route::get('/catalogo', [SeriesController::class, 'index'])->name('catalogo.index');
Route::get('/series/create', [SeriesController::class, 'create'])->name('series.create');
Route::get('/series/{id}', [SeriesController::class, 'show'])->name('series.show');
Route::put('/series/{id}', [SeriesController::class, 'update'])->name('series.update');
Route::get('/series/{id}/edit', [SeriesController::class, 'edit'])->name('series.edit');
Route::post('/series', [SeriesController::class, 'store'])->name('series.store');
Route::get('/bibliotecas', [BibliotecasController::class, 'index'])->name('bibliotecas.index');
Route::get('/listas', [ListasController::class, 'index'])->name('listas.index');
Route::get('/bibliotecas/{biblioteca}/listas/{lista}', [ListasController::class, 'show'])->name('listas.show');
Route::post('/series/{serieId}/add-to-list/{listaId}', [SeriesController::class, 'addToSerieList'])->name('series.add-to-list');
Route::post('/listas', [ListasController::class, 'store'])->name('listas.store');
Route::put('/listas/{lista}', [ListasController::class, 'update'])->name('listas.update');
Route::delete('/listas/{lista}', [ListasController::class, 'destroy'])->name('listas.destroy');
Route::delete('/listas/{lista}/quitar-serie/{serie}', [ListasController::class, 'quitarSerie'])->name('listas.quitar-serie');
