import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {BiCartAlt} from 'react-icons/bi'
import CartMenu from '../cartMenu/CartMenu'
import ItemsInCart from '../itemsInCart/ItemsInCart'
import { calcTotalPrice } from '../utils'

import './cartBlock.scss'



const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = calcTotalPrice(items)
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false)
    navigate("/order")

  }, [navigate])

  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length} />
      <BiCartAlt size={25} className='cart-block__icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
      {totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice} ₽</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
    </div>
  )
}

export default CartBlock