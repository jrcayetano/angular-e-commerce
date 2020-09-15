import { ActionsSubject } from '@ngrx/store';
import { AppActions, AppActionsType } from './app.actios';

export const initialState: any = {
  selectedMenu: '',
  token: '',
};

export function appReducer(state = initialState, action: AppActions) {
  switch (action.type) {
    case AppActionsType.setMenu: {
      return {
        ...state,
        selectedMenu: action.payload,
      };
    }
    case AppActionsType.setToken: {
      return {
        ...state,
        token: action.payload,
      };
    }
    default:
      return state;
  }
}
