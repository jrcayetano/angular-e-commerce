import { Observable } from 'rxjs';
import { API_PRODUCTS } from './../../../consts/api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${environment.server_url}/${API_PRODUCTS}`);
  }
}
