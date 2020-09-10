import { environment } from './../../../../environments/environment';
import {
  API_USER,
  API_PROFILE,
  API_PROFILE_EDIT,
  API_USER_ORDERS,
  API_FAVORITE_PRODUCTS,
} from './../../../consts/api';
import { ProfileResponse } from '../../../models/profile-response.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(`${environment.server_url}/${API_PROFILE}`);
  }

  updateProfile(profile: ProfileResponse): Observable<any> {
    console.log('update profile, sending... ', profile);
    return of(true);
    /* return this.http.put(
      `${environment.server_url}/${API_PROFILE_EDIT}`,
      profile
    ); */
  }

  getOrders(): Observable<any> {
    return this.http.get(`${environment.server_url}/${API_USER_ORDERS}`);
  }
  getFavorites(): Observable<any> {
    return this.http.get(`${environment.server_url}/${API_FAVORITE_PRODUCTS}`);
  }
}
