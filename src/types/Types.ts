import { CountryReducerState } from './CountryTypes'
import { CartReducerState } from './CartTypes'

export * from './CountryTypes'
export * from './CartTypes'

export type AppState = {
  countryReducer: CountryReducerState
  cartReducer: CartReducerState
}
