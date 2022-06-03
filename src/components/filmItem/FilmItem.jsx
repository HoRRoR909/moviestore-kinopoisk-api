import React from 'react'

import FilmCover from '../filmCover/FilmCover'
import FilmBuy from '../filmBuy/FilmBuy'
import FilmGenre from '../filmGenre/FilmGenre'

import './filmItem.scss'

const FilmItem = ({ film }) => {
  return (
    <div className='film-item'>
      <FilmCover image={film.image}/>
      <div className="film-item__details">
        <span className='film-item__title'>{film.title}</span>
        <div className="film-item__genre">
          {film.genres.map((genre) => <FilmGenre genre={genre} key={genre} />)}
        </div>
        <div className="film-item__buy">
          <FilmBuy film={film} />
        </div>
      </div>

    </div>
  )
}

export default FilmItem