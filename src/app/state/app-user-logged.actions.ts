import { Action } from '@ngrx/store';

export enum UserLoggedActionsType {
  setIsLogged = '[User logged - setIsLogged]',
}

export class SetIsLogged implements Action {
  readonly type = UserLoggedActionsType.setIsLogged;
}

export type UserLoggedActions = SetIsLogged;
