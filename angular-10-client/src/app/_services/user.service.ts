import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';


const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'http://localhost:8080/api/test/admin/users';


  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getUsersList(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}`);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }
  deleteUser(id: number): Observable<Object>{
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
