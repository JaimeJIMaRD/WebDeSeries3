import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biblioteca } from './biblioteca';
import { Lista } from './lista';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private baseUrl = 'http://localhost:8000/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  httpClient: any;

  constructor(private http: HttpClient) { }
  
  getBibliotecas(): Observable<Biblioteca> {
    return this.http.get<Biblioteca>(this.baseUrl+`/biblioteca`);
  }

  getListasByBibliotecaId(bibliotecaId: number): Observable<Lista[]> {
    return this.http.get<Lista[]>(`${this.baseUrl}/${bibliotecaId}/listas`);
  }

  getListaById(listaId: number): Observable<Lista> {
    return this.http.get<Lista>(`${this.baseUrl}/${listaId}`);
  }

  verLista(listaId: number): Observable<Lista> {
    return this.http.get<Lista>(`${this.baseUrl}/biblioteca/listas/${listaId}`);
  }

  createLista(lista:FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type','multipart/form-data');
    headers.append('Accept','application/json');
    return this.http.post<any>(this.baseUrl+ '/listas/', lista, {headers:headers})
  }

  updateLista(listaId: number, lista: Lista): Observable<Lista> {
    return this.http.put<Lista>(`${this.baseUrl}/${listaId}`, lista);
  }

  deleteLista(listaId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${listaId}`);
  }
  getSeriesByListaId(listaId: number): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${this.baseUrl}/${listaId}/series`);
  }

  eliminarSerieDeLista(listaId: number, serieId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${listaId}/series/${serieId}`);
  }

  addToLista(serieId:number,listaId:number): Observable<any>{
    return this.http.post<any>(this.baseUrl + "/series/"+serieId+"/add-to-list/"+listaId,serieId);
  }
}

