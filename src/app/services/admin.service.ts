import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from '../interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdmin(): Observable<IAdmin[]>{
   return this.http.get<IAdmin[]>('http://localhost:3000/adminArray')
  }
  
}
