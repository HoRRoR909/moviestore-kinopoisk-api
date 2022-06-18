import React from 'react'
import { useSelector } from 'react-redux'

import FilmPageCover from '../../components/filmPageCover/FilmPageCover'
import FilmGenre from '../../components/filmGenre/FilmGenre'
import FilmBuy from '../../components/filmBuy/FilmBuy'

import './filmPage.scss'

const FilmPage = () => {
  const film = useSelector(state => state.filmsReducer.currentFilm)

  if(!film) return null

  return (
    <div className='film-page'>
      <h1 className='film-page__title'>{film.nameRu}</h1>
      <div className="film-page__content">
        <div className="film-page__left">
          <iframe 
            width="90%"
            height="400px"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube Video Player"
            frameBorder="0"
          ></iframe>
          <div className="description">API Кинопоиска не дает ссылку ютуб, поэтому так. </div>
          <div className="description">Описания к фильмам тоже отсуствуют :( </div>
        </div>
        
        <div className="film-page__right">
          <FilmPageCover image={film.posterUrl} />
          <p>{film.nameRu}</p>
          <p className='secondary-text'>Жанры:</p>
          {film.genres.map((genre) => (<FilmGenre genre={genre} key={genre.genre} />))}
          <div className="film-page__buy-film">
            <FilmBuy film={film} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmPage