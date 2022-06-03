import React from 'react'

import {BiCartAlt} from 'react-icons/bi'

import './cartBlock.scss'

const CartBlock = () => {
  return (
    <div className='cart-block'>
      <BiCartAlt size={25} className='cart-block__icon'/>
      <span className='cart-block__total-price'>2000 р</span>
    </div>
  )
}

export default CartBlock