import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISparkPlug } from '../interface/sparkPlugs.interface';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  constructor(private http: HttpClient) { }

  addItem(data: ISparkPlug) : Observable<any>{
    return this.http.post('http://localhost:3000/sparkPlugsData', data)
  }
}
