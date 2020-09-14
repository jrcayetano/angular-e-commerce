import { Action } from '@ngrx/store';

export enum AppActionsType {
  setMenu = '[APP GENERAL - setMenu]',
}

export class SetMenu implements Action {
  readonly type = AppActionsType.setMenu;
  constructor(public payload: any) {}
}

export type AppActions = SetMenu;
