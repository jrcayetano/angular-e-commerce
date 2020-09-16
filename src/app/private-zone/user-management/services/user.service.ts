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
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(`${environment.server_url}/${API_PROFILE}`);
  }

  updateProfile(
    profile: ProfileResponse,
    userId: number,
    password: string
  ): Observable<any> {
    /* Para funcionar con json-auth-server es necesario el envío de la password e email
     * Por no que es necesario aplicar a password, el campo repassword que es el que contiene
     * la password en plano
     */
    profile['password'] = password;
    profile['repassword'] = password;
    return this.http.patch(
      `${environment.server_url}/users/${userId}`,
      profile
    );
  }

  getOrders(): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('_sort', 'id')
      .set('_order', 'desc');
    return this.http.get(`${environment.server_url}/${API_USER_ORDERS}`, {
      params,
    });
  }
  getFavorites(): Observable<any> {
    return this.http.get(`${environment.server_url}/${API_FAVORITE_PRODUCTS}`);
  }
}
