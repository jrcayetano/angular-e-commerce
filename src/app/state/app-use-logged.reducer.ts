import {
  UserLoggedActions,
  UserLoggedActionsType,
  SetIsLogged,
} from './app-user-logged.actions';
export const initialState: any = {
  isLogged: true,
  username: 'jose',
  email: 'jose@email.com',
};

export function userLoggedReducer(
  state = initialState,
  action: UserLoggedActions
) {
  switch (action.type) {
    case UserLoggedActionsType.setIsLogged: {
      return {
        ...state,
        isLogged: true,
      };
    }
    default:
      return state;
  }
}
