import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCurrentFilm } from '../../redux/films/reducer'
import FilmCover from '../filmCover/FilmCover'
import FilmBuy from '../filmBuy/FilmBuy'
import FilmGenre from '../filmGenre/FilmGenre'

import './filmItem.scss'

const FilmItem = ({ film }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setCurrentFilm(film))
    history.push(`/app/${film.title}`)
  }
  return (
    <div className='film-item' onClick={handleClick}>
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