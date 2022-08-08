import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAxiosFilmInfo } from '../../redux/films/filmInfoReducer'
import { getAxiosFilmImages } from '../../redux/films/filmImagesReducer'
import { getAxiosSimilarFilms } from '../../redux/films/similarFilmsReducer'
import FilmBuy from '../../components/filmBuy/FilmBuy'
import Carousel from '../../components/carousel/Carousel'
import CarouselItemPreview from '../../components/carouselItemPreview/CarouselItemPreview'
import CarouselItemFull from '../../components/carouselItemFull/CarouselItemFull'
import FilmInfo from '../../components/filmInfo/FilmInfo'
import SimilarFilms from '../../components/similarFilms/SimilarFilms'
import './filmPage.scss'

const FilmPage = () => {
  const film = useSelector(state => state.filmsReducer.currentFilm)
  const {isInfoLoaded, currentFilmInfo} = useSelector(state => state.filmInfoReducer)
  const {isImageLoaded, currentFilmImages} = useSelector(state => state.filmImagesReducer)
  const {isSimilarFilmsLoaded, similarFilms} = useSelector(state => state.similarFilmsReducer)
  const [showGallery, setShowGallery] = useState(false)
  const {id} = useParams()


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAxiosFilmInfo(id))
    dispatch(getAxiosFilmImages(id))
    dispatch(getAxiosSimilarFilms(id))
  }, [id, dispatch])

  const handleShowGallery = () => {
    document.body.style.overflow = "hidden"
    setShowGallery(true)
  }

  const handleHideGallery = () => {
    document.body.style.overflow = "visible"
    setShowGallery(false)
  }


  if(!film) return null

  return (
    <div className='film-page'>
      {showGallery && <div className="gallery_container overflow"
    >
      <Carousel pageWidth={1000} imgCount={1} imgWidth={1000} imgHeight={800}>
        { 
          !isImageLoaded
          ? <img 
          className='item' 
          src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/a9b7373f-8165-4d2f-a960-8caa2fb38cc1/300x" 
          alt="123" />
          : currentFilmImages && currentFilmImages.map((img) => 
          <CarouselItemFull imageUrl={img.imageUrl} key={img.imageUrl}/>)
        }
      </Carousel>
      <div className="cross" onClick={handleHideGallery}>&times;</div>
      </div>}
      <div className="title_container">
        <h1 className='film-page__title'>{film.nameRu}</h1>
        <div className="film-page__buy-film">
          <FilmBuy film={film} currentFilmInfo={currentFilmInfo}/>
        </div>
      </div>
      {currentFilmInfo ? <p className="original_name">{currentFilmInfo.nameOriginal}</p> : <p>Оригинальное название</p>}
      
      <div className="film-page__content">
        <div className="film-page__left">
          
          {currentFilmInfo ? <p className="slogan">{currentFilmInfo.slogan}</p> : <p>Слоган</p>}
          <h2>Описание:</h2>
          <div className="description">{!isInfoLoaded ? 'Описание фильма' : currentFilmInfo.description }</div>
          <h2>О фильме</h2>
          {currentFilmInfo ? <FilmInfo {...currentFilmInfo} /> : <p>Информация о фильме загружается...</p>}
          <h2>Скриншоты:</h2>
          <Carousel pageWidth={227} imgCount={3} imgWidth={681} imgHeight={150} > 
            { 
              !isImageLoaded
              ?  <p>Загрузка...</p>
              : currentFilmImages && currentFilmImages.map((img) => 
              <CarouselItemPreview previewUrl={img.previewUrl} key={img.previewUrl} setShowGallery={handleShowGallery}/>)
            }
          </Carousel>
          <h2>Похожие фильмы</h2>
          {similarFilms ? <SimilarFilms similarFilms={similarFilms}/> : <p>Информация о похожих фильмах загружается...</p>}
        </div>
        <div className="film-page__right">
          
          <img className='poster' src={film.posterUrl} alt="poster" />
          <iframe 
            className='youtube'
            width="100%"
            height="180px"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube Video Player"
            frameBorder="0"
          ></iframe>
          <div className="description">API Кинопоиска дает странные ссылки, поэтому видео такое :( </div>
        </div>
      </div>
    </div>
  )
}

export default FilmPage