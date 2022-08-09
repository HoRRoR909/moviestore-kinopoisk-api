import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilmItem from '../../components/filmItem/FilmItem'
import FilmItemPreloaded from '../../components/filmItem/FilmItemPreloaded'
import { getAxiosFilms } from '../../redux/films/filmsReducer'
import {setCurrentPage} from '../../redux/films/filmsReducer'
import { createPages } from '../../components/utils'
import './homePage.scss'

const HomePage = () => {
  const dispatch = useDispatch()
  const {films, isLoading, currentPage, totalPages} = useSelector((state) => state.filmsReducer) 
  
  const pages = []
  createPages(pages, totalPages, currentPage)

  useEffect(() => {
    dispatch(getAxiosFilms(currentPage))
  }, [currentPage, dispatch])

const handlePageSelect = (page) => {
  dispatch(setCurrentPage(page))
  page !== currentPage && window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

  return (
    
    <div className="home-page">
      <div className='films-list'>
        {
          isLoading
          ? Array(20).fill(0).map((_, index) => <FilmItemPreloaded key={index}/>)
          : films && films.map(film => <FilmItem film={film} key={film.filmId} />) 
        }
      </div>
      <div className="pages">
        {pages.map((page) => <span 
          className={currentPage === page ? 'current-page' : 'page'} 
          key={page}
          onClick={() => handlePageSelect(page)}
          >
          {page}
          </span>
        )}
      </div>
    </div>
  )
}

export default HomePage