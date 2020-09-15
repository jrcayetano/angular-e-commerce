import { environment } from './../../../../environments/environment';
import { StatesService } from './../../../services/states.service';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { RegisterRequest } from './../../../models/register-request.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient, private statesService: StatesService) {}

  register(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post(
      `${environment.server_url}/register`,
      registerRequest
    );
    /*  console.log('sending...', registerRequest);
    return of(null); */
    /* */
  }
  getState(): Observable<any> {
    return this.statesService.getState();
  }
}
