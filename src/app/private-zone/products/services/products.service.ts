import { Order } from './../../../models/order.model';
import { ProductCard } from 'src/app/models/product-card.model';
import { Observable } from 'rxjs';
import { API_PRODUCTS } from './../../../consts/api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAll(params?: HttpParams): Observable<any> {
    let url = `${environment.server_url}/${API_PRODUCTS}`;

    if (params) {
      return this.http.get(`${url}`, { params });
      /* return this.http
        .get(`${url}`, { params })
        .pipe(
          map((products: ProductCard[]) =>
            products.map((product: ProductCard) =>
              this.calculatePriceOff(product)
            )
          )
        ); */
    }
    this.http.get(`${url}`);
    /*  return this.http
      .get(`${url}`)
      .pipe(
        map((products: ProductCard[]) =>
          products.map((product: ProductCard) =>
            this.calculatePriceOff(product)
          )
        )
      ); */
  }

  getById(productId): Observable<any> {
    return this.http.get(
      `${environment.server_url}/${API_PRODUCTS}/${productId}`
    );
    /* return this.http
      .get(`${environment.server_url}/${API_PRODUCTS}/${productId}`)
      .pipe(map((product: ProductCard) => this.calculatePriceOff(product))); */
  }

  generateFilterSearch(
    { searchTerm, rating = '1', min = '0', max, player, mouse, light, clock },
    isOffer = false
  ): HttpParams {
    const qS = searchTerm;
    const ratingS = rating;

    let params = new HttpParams();
    const priceLabelParam = isOffer ? 'priceOffer' : 'price';

    if (searchTerm) {
      params = params.set('q', qS);
    }
    if (min) {
      params = params.set(`${priceLabelParam}_gte`, min);
    }
    if (rating) {
      params = params.set('rating_gte', rating);
    }
    if (max) {
      params = params.set(`${priceLabelParam}_lte`, max);
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
    if (isOffer) {
      params = params.set('isOffer_ne', 'false');
    } else {
      params = params.set('isOffer_ne', 'true');
    }
    return params;
  }

  private calculatePriceOff(product: ProductCard): ProductCard {
    product.priceOffer =
      product.price - (product.price * product.discount) / 100;
    return product;
    /*   return {
      ...product,
      priceOffer: product.price - (product.price * product.discount) / 100,
    }; */
  }

  addOfferFilter(params: HttpParams): HttpParams {
    params.set('discount', 'discont_gte');
    return params;
  }
}
