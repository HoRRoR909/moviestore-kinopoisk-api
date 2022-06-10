import React from 'react'

import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'
import { calcTotalPrice } from '../utils'

import './cartMenu.scss'

const CartMenu = ({items, onClick}) => {
  return (
    <div className='cart-menu'>
      <div className="cart-menu__films-list">
        {
          items.length > 0 ? items.map((film) => <CartItem key={film.nameRu} {...film} />) : "Корзина пуста"
        }
      </div>
      {
        items.length > 0 ?
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб</span>
          </div>
          <Button type="primary" size="m" onClick={onClick} >
            Оформить заказ
          </Button>
        </div>
        : null
      }
    </div>
  )
}

export default CartMenu