import React from 'react'
import Button from '../button/Button'

import './filmbuy.scss'

const FilmBuy = ({film}) => {
  return (
    <div className='film-buy'>
      <span className='film-buy__price'>{film.price} руб.</span>
      <Button type="primary" onClick={() => null} >
        В корзину
      </Button>
    </div>
  )
}

export default FilmBuy