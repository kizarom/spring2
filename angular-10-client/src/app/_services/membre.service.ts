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

/*
  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(API_URL, employee);
  }



  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpt.put(`${this.baseURL}/${id}`, employee);
  }
*/
  
}
