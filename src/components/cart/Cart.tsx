import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../types/Types'
import { removeCountryCart } from '../../redux/actions'

import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'

import { v4 as uuidv4 } from 'uuid'

import './cart.scss'

const CartList = () => {
  const cart = useSelector((state: AppState) => state.cartReducer.cart)
  const dispatch = useDispatch()
  const handleCartItemDel = (country: any) => {
    dispatch(removeCountryCart(country))
  }

  return (
    <div className="cart">
      {cart &&
        cart.map((country: any) => {
          return (
            <div className="cart-item" key={uuidv4()}>
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
