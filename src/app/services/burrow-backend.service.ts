import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AvailableClusters } from 'burrow-backend/dist/models/available-clusters';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BurrowBackendService {
  private burrowApiUrl = '/api/burrow';

  constructor(
    private http: HttpClient
  ) {}

  clusters(): Observable<AvailableClusters> {
    return this.http.get<AvailableClusters>(`${this.burrowApiUrl}/clusters`);
  }

}
