import { Action } from '@ngrx/store';

export enum UserLoggedActionsType {
  setIsLogged = '[User logged - setIsLogged]'
}

export class SetIsLogged implements Action {
  readonly type = UserLoggedActionsType.setIsLogged;
  constructor(public payload: any) {}
}

export type UserLoggedActions = SetIsLogged;
