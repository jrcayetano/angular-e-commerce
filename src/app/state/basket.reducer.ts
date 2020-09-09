import { BasketActions, BasketActionsType, AddProduct } from './basket.actions';
export const initialState: any = {
  productsList: [],
};

export function basketReducer(state = initialState, action: BasketActions) {
  switch (action.type) {
    case BasketActionsType.addProduct: {
      return {
        ...state,
        productsList: [...state.productsList, action.payload],
      };
    }
    default:
      return state;
  }
}
