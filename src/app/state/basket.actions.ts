import { Action } from '@ngrx/store';

export enum BasketActionsType {
  addProduct = '[BASKET - add product]',
  basketToggle = '[BASKET - toggle]',
}

export class AddProduct implements Action {
  readonly type = BasketActionsType.addProduct;
  constructor(public payload: any) {}
}

export class BasketToggle implements Action {
  readonly type = BasketActionsType.basketToggle;
}

export type BasketActions = AddProduct | BasketToggle;
