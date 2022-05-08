import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  CountryActions,
  // FetchAllCountriesAction,
} from '../../types/Types'

//fetch all countries

export function fetchAllCountries(countries: []): CountryActions {
  return {
    type: FETCH_COUNTRIES,
    payload: countries,
  }
}

//fetch all countries success

export function fetchAllCountriesSuccess(countries: []): CountryActions {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  }
}

//fetch all countries failure

export function fetchAllCountriesFailure(): CountryActions {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: 'error',
  }
}
