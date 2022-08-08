import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentFilm } from '../../redux/films/filmsReducer'
import { paths } from '../../paths'
import './similarFilmItem.scss'

const SimilarFilmItem = ({film}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentFilm(film))
    navigate(`${paths.film}/${film.filmId}`)
  }

  return (
    <div className="film_wrapper" onClick={handleClick} >
      <img className="film_logo" src={film.posterUrlPreview} alt="logo"></img>
      {/* <div className="film_title">{film.nameRu}</div> */}
    </div>
  )
}

export default SimilarFilmItem