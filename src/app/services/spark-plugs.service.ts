import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ISparkPlug } from '../interface/sparkPlugs.interface';

@Injectable({
  providedIn: 'root'
})
export class SparkPlugsService {

  constructor(private http: HttpClient) { }

  private sparkPlugsDataSignal  = signal<ISparkPlug[]>([]);

  get getSparkPlugsData() {
    return this.sparkPlugsDataSignal;
  }

  setSparkPlugsData(data: ISparkPlug[]) {
    this.sparkPlugsDataSignal.set(data);
  }

  getDataService(): Observable<ISparkPlug[]>{
    return this.http.get<ISparkPlug[]>('http://localhost:3000/sparkPlugsData')
  }
}
 