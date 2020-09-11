import { Action } from '@ngrx/store';

export enum BasketActionsType {
  addProduct = '[BASKET - add product]',
  incrementProductQuantity = '[BASKET - Increment quantity]',
  deleteProduct = '[BASKET - delete product]',
  basketToggle = '[BASKET - toggle]',
}

export class AddProduct implements Action {
  readonly type = BasketActionsType.addProduct;
  constructor(public payload: any) {}
}

export class IncremenProductQuantity implements Action {
  readonly type = BasketActionsType.incrementProductQuantity;
  constructor(public payload: any) {}
}

export class DeleteProduct implements Action {
  readonly type = BasketActionsType.deleteProduct;
  constructor(public payload: any) {}
}

export class BasketToggle implements Action {
  readonly type = BasketActionsType.basketToggle;
}

export type BasketActions =
  | AddProduct
  | BasketToggle
  | IncremenProductQuantity
  | DeleteProduct;
