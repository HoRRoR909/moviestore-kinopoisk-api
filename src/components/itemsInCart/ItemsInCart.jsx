import React from 'react'

import './itemsIncart.scss'

const ItemsInCart = ({quantity = 0}) => {
  return (
    quantity > 0 ? (
    <div className='items-in-cart'>{quantity}</div>
    ) : null
  )
}

export default ItemsInCart