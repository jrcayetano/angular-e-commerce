import { Observable, of } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login({ email = '', password = '' }): Observable<any> {
    console.log('sending ', email, password);
    return of(true);
    // this.http.get(`${environment.server_url}`)
  }
}
