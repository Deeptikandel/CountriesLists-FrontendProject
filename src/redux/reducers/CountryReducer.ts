import {
  CountryReducerState,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_SUCCESS,
} from '../../types/Types'

const initState: CountryReducerState = {
  countries: [],
  isLoading: false,
  error: '',
}
export default function countryReducer(
  state: CountryReducerState = initState,
  action: any
) {
  switch (action.type) {
  case FETCH_COUNTRIES:
    return {
      ...state,
      isLoading: true,
    }
  case FETCH_COUNTRIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      countries: action.payload,
      error: '',
    }
  case FETCH_COUNTRIES_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    }

  default:
    return state
  }
}
