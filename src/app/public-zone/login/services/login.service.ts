import { Observable, of } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_LOGIN } from 'src/app/consts/api';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login({ email = '', password = '' }): Observable<any> {
    return this.http.post(`${environment.server_url}/${API_LOGIN}`, {
      email,
      password,
    });
    /*    console.log('sending ', email, password);
    return of(true); */
    // this.http.get(`${environment.server_url}`)
  }
  getUserByEmail(email): Observable<any> {
    return this.http.get(`${environment.server_url}/users?email=${email}`);
    /*    console.log('sending ', email, password);
    return of(true); */
    // this.http.get(`${environment.server_url}`)
  }
}
