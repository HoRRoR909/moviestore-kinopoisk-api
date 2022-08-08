import React from 'react'
import { Link } from 'react-router-dom'
import CartBlock from '../cartBlock/CartBlock'
import { paths } from '../../paths'

import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="header_wrapper">
        <Link to={paths.home} className='header__store-title'>
          movie store
        </Link>
      </div>
      <div className="header_wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  )
}

export default Header