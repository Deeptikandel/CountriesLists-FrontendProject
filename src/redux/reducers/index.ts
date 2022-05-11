import { combineReducers } from 'redux'
import countryReducer from './CountryReducer'
import cartReducer from './CartReducer'

const rootReducer = () => combineReducers({ countryReducer, cartReducer })

export default rootReducer
