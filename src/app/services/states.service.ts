import { Observable } from 'rxjs';
import { API_STATES } from './../consts/api';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  constructor(private http: HttpClient) {}

  getState(): Observable<any> {
    return this.http.get(`${environment.server_url}/${API_STATES}`);
  }
}
