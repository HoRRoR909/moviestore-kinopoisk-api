import React from 'react'

import './filmGenre.scss'

const FilmGenre = ({genre}) => {
  return (
    <span className='film-genre'>
      {genre.genre}
    </span>
    
    
  )
}

export default FilmGenre