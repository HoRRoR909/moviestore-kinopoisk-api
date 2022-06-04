import React from 'react'
import { useSelector } from 'react-redux'

import OrderItem from '../../components/orderItem/OrderItem'
import { calcTotalPrice } from '../../components/utils'

import './orderPage.scss'

const OrderPage = () => {
  const items = useSelector(state => state.cart.itemsInCart)

  if(items.length < 1 ) {
    return <h1>Ваша корзина пуста</h1>
  }

  return (
    <div className='order-page'>
      <div className="order-page__left">
        {items.map(film => <OrderItem film={film} key={film.title}/>)}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} товаров на сумму { calcTotalPrice(items) } ₽
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderPage