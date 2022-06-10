import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilmItem from '../../components/filmItem/FilmItem'
import FilmItemPreloaded from '../../components/filmItem/FilmItemPreloaded'
import { getFilms } from '../../redux/films/reducer'
import './homePage.scss'

const HomePage = () => {
  const dispatch = useDispatch()
  const films = useSelector((state) => state.filmsReducer.films) 
  const isLoading = useSelector((state) => state.filmsReducer.isLoading)

  useEffect(() => {
    dispatch(getFilms())
  }, [dispatch])

  return (
    <div className='home-page'>
      {
        isLoading
        ? Array(20).fill(0).map((_, index) => <FilmItemPreloaded key={index}/>)
        : films && films.map(film => <FilmItem film={film} key={film.filmId} />) 
      }
    </div>
  )
}

export default HomePage