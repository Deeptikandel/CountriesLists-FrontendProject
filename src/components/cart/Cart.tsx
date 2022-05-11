import React from 'react'
import './cart.scss'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../types/Types'
import DeleteIcon from '@mui/icons-material/Delete'
import { removeCountryCart } from '../../redux/actions'
import { IconButton } from '@mui/material'

const CartList = () => {
  const cart = useSelector((state: AppState) => state.cartReducer.cart)
  const dispatch = useDispatch()
  const handleCartItemDel = (country: any) => {
    dispatch(removeCountryCart(country))
  }
  console.log(cart)
  return (
    <div className="cart">
      {cart &&
        cart.map((country: any, index) => {
          return (
            <div className="cart-item" key={index}>
              <img
                src={country.flags.svg}
                alt={`${country.name}flag`}
                width="70px"
              />
              <h3>{country.name}</h3>

              <IconButton onClick={() => handleCartItemDel(country)}>
                <DeleteIcon />
              </IconButton>
            </div>
          )
        })}
    </div>
  )
}

export default CartList
