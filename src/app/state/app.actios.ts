import { Action } from '@ngrx/store';

export enum AppActionsType {
  setMenu = '[APP GENERAL - setMenu]',
  setToken = '[APP GENERAL - setToken]',
}

export class SetMenu implements Action {
  readonly type = AppActionsType.setMenu;
  constructor(public payload: any) {}
}

export class SetToken implements Action {
  readonly type = AppActionsType.setToken;
  constructor(public payload: any) {}
}

export type AppActions = SetMenu | SetToken;
