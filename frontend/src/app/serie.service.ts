import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie';


@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private apiURL = "http://127.0.0.1:8000/api";

  constructor(private httpClient:HttpClient) { }
  getSeries(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(`${this.apiURL}/catalogo`);
  }  
  getSerie(id: number): Observable<Serie> {
    const url = `${this.apiURL}/series/${id}`;
    return this.httpClient.get<Serie>(url);
  }

}
