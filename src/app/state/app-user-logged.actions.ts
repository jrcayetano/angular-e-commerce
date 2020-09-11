import { Action } from '@ngrx/store';

export enum UserLoggedActionsType {
  setIsLogged = '[User logged - setIsLogged]',
  addFavoriteProduct = '[User logged - addFavoriteProduct]',
  addFavoriteProductInBulk = '[User logged - addFavoriteProductInBulk]',
  deleteFavoriteProduct = '[User logged - deleteFavoriteProduct]',
}

export class SetIsLogged implements Action {
  readonly type = UserLoggedActionsType.setIsLogged;
}

export class AddFavoriteProduct implements Action {
  readonly type = UserLoggedActionsType.addFavoriteProduct;
  constructor(public payload: any) {}
}

export class AddFavoriteProductInBulk implements Action {
  readonly type = UserLoggedActionsType.addFavoriteProductInBulk;
  constructor(public payload: any) {}
}

export class DeleteFavoriteProduct implements Action {
  readonly type = UserLoggedActionsType.deleteFavoriteProduct;
  constructor(public payload: any) {}
}

export type UserLoggedActions =
  | SetIsLogged
  | AddFavoriteProduct
  | AddFavoriteProductInBulk
  | DeleteFavoriteProduct;
