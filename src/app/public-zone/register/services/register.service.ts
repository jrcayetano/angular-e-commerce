import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { RegisterRequest } from './../../../models/register-request.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { API_STATES } from '../../../consts/api';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(registerRequest: RegisterRequest): Observable<any> {
    console.log('sending...', registerRequest);
    return of(null);
    /* */
  }
  getState(): Observable<any> {
    return this.http.get(`${environment.server_url}/${API_STATES}`);
  }
}
