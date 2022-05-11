import {
  ADD_COUNTRY_TO_CART,
  REMOVE_COUNTRY_FROM_CART,
  CartActions,
  CartCountry,
  // CartReducerState,
} from '../../types/Types'

export function addCountryCart(country: CartCountry): CartActions {
  return {
    type: ADD_COUNTRY_TO_CART,
    payload: country,
  }
}
export function removeCountryCart(country: CartCountry): CartActions {
  return {
    type: REMOVE_COUNTRY_FROM_CART,
    payload: country,
  }
}
