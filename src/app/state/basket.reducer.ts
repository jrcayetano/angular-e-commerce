import { BasketActions, BasketActionsType, AddProduct } from './basket.actions';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { ProductCardComponent } from '../private-zone/products/components/product-card/product-card.component';
import { removeSummaryDuplicates } from '@angular/compiler';
export const initialState: any = {
  opened: true,
  productsList: [],
};

export function basketReducer(state = initialState, action: BasketActions) {
  switch (action.type) {
    case BasketActionsType.addProduct: {
      return {
        ...state,
        productsList: [
          ...state.productsList,
          { ...action.payload, quantity: 1 },
        ],
      };
    }
    case BasketActionsType.basketToggle: {
      return {
        ...state,
        opened: !state.opened,
      };
    }
    case BasketActionsType.incrementProductQuantity: {
      return {
        ...state,
        productsList: state.productsList.map((product) => {
          if (product.id === action.payload.productId) {
            return { ...product, quantity: action.payload.quantity };
          }
          return product;
        }),
      };
    }
    case BasketActionsType.deleteProduct: {
      return {
        ...state,
        productsList: state.productsList.filter(
          (product) => product.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}
