import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Membre } from '../models/Membre';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  private baseURL = 'http://localhost:8080/api/test/admin/membres';


  constructor(private http: HttpClient) { }

  getMembresList(): Observable<Membre[]>{
    return this.http.get<Membre[]>(`${this.baseURL}`);
  }

  getMembreById(id: number): Observable<Membre>{
    return this.http.get<Membre>(`${this.baseURL}/${id}`);
  }
  deleteMembre(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  createMembre(membre: Membre): Observable<Object>{
    return this.http.post(`${this.baseURL}`, membre);
  }

  updateMembre(id: number, membre: Membre): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, membre);
  }
  updateStatus(id:number,membre:Membre){
    return this.http.post(`${this.baseURL}/status/${id}`,membre);
  }
}
