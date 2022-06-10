import React from 'react'

import './cartItem.scss'

const CartItem = ({nameRu, year, filmId}) => {
  return (
    <div className='cart-item'>
      <span>{nameRu}</span>
      <div className="cart-item__price">
        <span>{year} ₽</span>
      </div>
    </div>
  )
}

export default CartItem