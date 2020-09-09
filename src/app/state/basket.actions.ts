import { Action } from '@ngrx/store';

export enum BasketActionsType {
  addProduct = '[BASKET - add product]',
}

export class AddProduct implements Action {
  readonly type = BasketActionsType.addProduct;
  constructor(public payload: any) {}
}

export type BasketActions = AddProduct;
