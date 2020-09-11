import { BasketActions, BasketActionsType, AddProduct } from './basket.actions';
export const initialState: any = {
  opened: true,
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
    case BasketActionsType.basketToggle: {
      return {
        ...state,
        opened: !state.opened,
      };
    }
    default:
      return state;
  }
}
