export const ADD_COUNTRY_TO_CART = 'ADD_COUNTRY_TO_CART'
export const REMOVE_COUNTRY_FROM_CART = 'REMOVE_COUNTRY_FROM_CART'

export type CartCountry = {}

export type CartReducerState = {
  cart: CartCountry[]
}

// Action types
export type AddCountryAction = {
  type: typeof ADD_COUNTRY_TO_CART
  payload: CartCountry
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY_FROM_CART
  payload: CartCountry
}

export type CartActions = AddCountryAction | RemoveCountryAction
