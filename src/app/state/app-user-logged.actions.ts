import { Action } from '@ngrx/store';

export enum UserLoggedActionsType {
  setIsLogged = '[User logged - setIsLogged]',
  setUsername = '[User logged - setUsername]',
  setEmail = '[User logged - setEmail]',
  setProfile = '[User logged - setProfile]',
  addFavoriteProduct = '[User logged - addFavoriteProduct]',
  addFavoriteProductInBulk = '[User logged - addFavoriteProductInBulk]',
  deleteFavoriteProduct = '[User logged - deleteFavoriteProduct]',
}

export class SetIsLogged implements Action {
  readonly type = UserLoggedActionsType.setIsLogged;
}

export class SetUsername implements Action {
  readonly type = UserLoggedActionsType.setUsername;
  constructor(public payload: any) {}
}

export class SetEmail implements Action {
  readonly type = UserLoggedActionsType.setEmail;
  constructor(public payload: any) {}
}

export class SetProfile implements Action {
  readonly type = UserLoggedActionsType.setProfile;
  constructor(public payload: any) {}
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
  | DeleteFavoriteProduct
  | SetUsername
  | SetEmail
  | SetProfile;
