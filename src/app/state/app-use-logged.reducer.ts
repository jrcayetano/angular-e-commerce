import {
  UserLoggedActions,
  UserLoggedActionsType,
  SetIsLogged,
} from './app-user-logged.actions';
export const initialState: any = {
  isLogged: true,
  username: 'jose',
  email: 'jose@email.com',
  favoriteProducts: [],
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
    case UserLoggedActionsType.addFavoriteProduct: {
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, action.payload],
      };
    }
    case UserLoggedActionsType.deleteFavoriteProduct: {
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
}
