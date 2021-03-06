import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/app';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) { 
    
  }

  getUsers(){
    return this.http.get(`${this.API_URI}/app`);
  }

  getuser(id:string){
    return this.http.get(`${this.API_URI}/app/${id}`);
  }

  deleteUser(id: string){
    return this.http.delete(`${this.API_URI}/app/${id}`);
  }

  saveUser(user: User){
    return this.http.post(`${this.API_URI}/app/`,user);
  }

  updateUser(id: string, updateUser: User){
    return this.http.put(`${this.API_URI}/app/${id}`,updateUser);
  }

}
