import React from 'react'
import SimilarFilmItem from '../similarFilmItem/SimilarFilmItem'
import './similarFilms.scss'

const SimilarFilms = ({similarFilms}) => {
  return (
    <div className='container'>
      {similarFilms && similarFilms.slice(0, 4).map((film) => 
      
      <SimilarFilmItem key={film.filmId} film={film} />
      )}
    </div>
  )
}

export default SimilarFilms