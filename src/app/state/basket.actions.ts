import { Action } from '@ngrx/store';

export enum BasketActionsType {
  addProduct = '[User logged - setIsLogged]',
}

export class AddProduct implements Action {
  readonly type = BasketActionsType.addProduct;
  constructor(public payload: any) {}
}

export type BasketActions = AddProduct;
