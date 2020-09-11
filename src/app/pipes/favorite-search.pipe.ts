import { FavoriteProduct } from './../models/favorite-product.model';
import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

@Pipe({
  name: 'favoriteSearch',
})
export class FavoriteSearchPipe implements PipeTransform {
  transform(value: FavoriteProduct[], name: string): FavoriteProduct[] {
    return value.filter((product: FavoriteProduct) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}
