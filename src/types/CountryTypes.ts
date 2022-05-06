export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'

export type CountryReducersState = {
  countries: []
  isLoading: boolean
  error: string
}

// Action types
export type FetchAllCountriesAction = {
  type: typeof FETCH_COUNTRIES
  payload?: string
}
