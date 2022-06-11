import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/reducer'

import './cartItem.scss'

const CartItem = ({nameRu, year, filmId}) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(deleteItemFromCart(filmId))
  }
  return (
    <div className='cart-item'>
      <span>{nameRu}</span>
      <div className="cart-item__price">
        <span>{year} ₽</span>
        <AiOutlineCloseCircle size={25} className="cart-item__delete-icon" onClick={handleClick} />
      </div>
    </div>
  )
}

export default CartItem