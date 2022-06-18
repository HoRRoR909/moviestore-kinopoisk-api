import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentFilm } from '../../redux/films/reducer'
import FilmCover from '../filmCover/FilmCover'
import FilmBuy from '../filmBuy/FilmBuy'
import FilmGenre from '../filmGenre/FilmGenre'
import './filmItem.scss'

const FilmItem = ({ film }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentFilm(film))
    navigate(`/app/${film.nameRu}`)
  }
  return (
    <div className='film-item' onClick={handleClick}>
      <FilmCover image={film.posterUrl}/>
      <div className="film-item__details">
        <span className='film-item__title'>{film.nameRu}</span>
        <div className="film-item__genre">
          {film.genres.map((genre) => <FilmGenre genre={genre} key={genre.genre} />)}
        </div>
        <div className="rating">{film.rating}</div>
        <div className="film-item__buy">
          <FilmBuy film={film} />
        </div>
      </div>
    </div>
  )
}

export default FilmItem