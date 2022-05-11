import { Dispatch } from 'redux'
import axios from 'axios'
import {
  FETCH_COUNTRIES_LOADING,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  CountryActions,
} from '../../types/Types'

//fetch all countries

export function fetchAllCountriesLoading(): CountryActions {
  return {
    type: FETCH_COUNTRIES_LOADING,
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

export function fetchAllCountriesFailure(error: string): CountryActions {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: 'error',
  }
}

//fetching data from countries
export function fetchAllCountries() {
  return (dispatch: Dispatch) => {
    dispatch(fetchAllCountriesLoading())
    axios
      .get('https://restcountries.com/v2/all')
      .then((res) => {
        const countries = res.data
        dispatch(fetchAllCountriesSuccess(countries))
      })
      .catch((err) => {
        dispatch(fetchAllCountriesFailure(err))
      })
  }
}
