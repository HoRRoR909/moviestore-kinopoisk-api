import React from 'react'
import { Link } from 'react-router-dom'
import CartBlock from '../cartBlock/CartBlock'

import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="wrapper">
        <Link to='/moviestore-kinopoisk-api' className='header__store-title'>
          movie store
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  )
}

export default Header