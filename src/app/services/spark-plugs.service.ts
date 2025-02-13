import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ISparkPlug } from '../interface/sparkPlugs.interface';

@Injectable({
  providedIn: 'root'
})
export class SparkPlugsService {

  constructor(private http: HttpClient) {
    this.loadSparkPlugs();
  }

  private sparkPlugsDataSignal = signal<ISparkPlug[]>([]);

  get sparkPlugsData() {
    return this.sparkPlugsDataSignal;
  }

  setSparkPlugsData(data: ISparkPlug[]) {
    this.sparkPlugsDataSignal.set(data);
  }

  private loadSparkPlugs() {
    this.getDataService().subscribe({
      next: (data) => this.setSparkPlugsData(data),
      error: (err) => console.error('Failed to fetch spark plugs data', err),
    });
  }

  private getDataService(): Observable<ISparkPlug[]> {
    return this.http.get<ISparkPlug[]>('http://localhost:3000/sparkPlugsData');
  }
}
