const initState = {
  cart: [],
}

export default function cartReducer(state = initState, action: any) {
  switch (action.type) {
  case 'ADD_COUNTRY_TO_CART': {
    const country = action.payload
    return {
      ...state,
      cart: [...state.cart, country],
    }
  }

  case 'REMOVE_COUNTRY_FROM_CART': {
    const newCountry = action.payload
    const tempCart = state.cart.filter((country) => country !== newCountry)
    return {
      ...state,
      cart: [...tempCart],
    }
  }

  default:
    return state
  }
}
