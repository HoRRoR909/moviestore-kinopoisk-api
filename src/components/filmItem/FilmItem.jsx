import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { paths } from '../../paths'
import { useDispatch } from 'react-redux'
import { setCurrentFilm } from '../../redux/films/filmsReducer'
import FilmCover from '../filmCover/FilmCover'
import FilmBuy from '../filmBuy/FilmBuy'
import './filmItem.scss'

const FilmItem = ({ film }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentFilm(film))
    navigate(`${paths.film}/${film.filmId}`)
  }
  return (
    
      <div className='film-item' onClick={handleClick}>
        <FilmCover image={film.posterUrl}/>
        <div className="film-item__details">
          <span className='film-item__title'>{film.nameRu}</span>
          <div className="rating">{film.rating}</div>
          <div className="film-item__buy">
            <FilmBuy film={film} />
          </div>
        </div>
      </div>
    
  )
}

export default FilmItem