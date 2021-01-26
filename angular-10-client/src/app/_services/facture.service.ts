import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../models/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private baseURL = 'http://localhost:8080/api/test/admin/factures';


  constructor(private http: HttpClient) { }

  getFacturesList(): Observable<Facture[]>{
    return this.http.get<Facture[]>(`${this.baseURL}`);
  }

  getFactureById(id: number): Observable<Facture>{
    return this.http.get<Facture>(`${this.baseURL}/${id}`);
  }
  deletefacture(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }


  createFacture(facture: Facture): Observable<Object>{
    return this.http.post(`${this.baseURL}`, facture);
  }



  updateFacture(id: number, facture: Facture): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, facture);
  }

  
}
