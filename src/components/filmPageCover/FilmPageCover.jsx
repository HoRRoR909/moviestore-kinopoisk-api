import React from 'react'
import './filmPageCover.scss'

const FilmPageCover = ({image=""}) => {
  return (
    <div className='film-page-cover'style={{ backgroundImage: `url(${image})` }} ></div>
  )
}

export default FilmPageCover