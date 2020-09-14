import { Observable } from 'rxjs';
import { API_PRODUCTS } from './../../../consts/api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(params?: HttpParams): Observable<any> {
    let url = `${environment.server_url}/${API_PRODUCTS}`;

    if (params) {
      return this.http.get(`${url}`, { params });
    }
    return this.http.get(`${url}`);
  }

  getById(productId): Observable<any> {
    return this.http.get(
      `${environment.server_url}/${API_PRODUCTS}/${productId}`
    );
  }

  generateFilterSearch({
    searchTerm,
    rating = '1',
    min = '0',
    max,
    player,
    mouse,
    light,
    clock,
  }): HttpParams {
    const qS = searchTerm;
    const ratingS = rating;

    let params = new HttpParams();

    if (searchTerm) {
      params = params.set('q', qS);
    }
    if (min) {
      params = params.set('price_gte', min);
    }
    if (rating) {
      params = params.set('rating_gte', rating);
    }
    if (max) {
      params = params.set('price_lte', max);
    }
    if (player || mouse || light || clock) {
      if (player) {
        params = params.has('category')
          ? params.append('category', 'player')
          : params.set('category', 'player');
      }
      if (mouse) {
        params = params.has('category')
          ? params.append('category', 'mouse')
          : params.set('category', 'mouse');
      }
      if (light) {
        params = params.has('category')
          ? params.append('category', 'light')
          : params.set('category', 'light');
      }
      if (clock) {
        params = params.has('category')
          ? params.append('category', 'clock')
          : params.set('category', 'clock');
      }
      /*  if (categories.length > 0) {
        params.append('category', categories.join(','));
      } */
    }
    return params;
  }
}
