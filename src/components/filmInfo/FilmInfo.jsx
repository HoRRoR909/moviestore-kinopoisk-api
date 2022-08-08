import React from 'react'
import FilmGenre from '../filmGenre/FilmGenre'
import './filmInfo.scss'

const FilmInfo = ({year, countries, genres}) => {
  return (
    <div className="about_film_container">
      {year && <div className="info_item">
        <p className="secondary-text info_title">Год производства</p>
        <p className="info_desc">{year}</p>
      </div>}
      {countries && <div className="info_item">
        <p className="secondary-text info_title">Страна</p>
        <p className="info_desc">{countries[0].country}</p>
      </div>}
      {genres && <div className="info_item">
        <p className="secondary-text info_title">Жанры</p>
        {genres.map((genre) => (<FilmGenre genre={genre} key={genre.genre} />))}
      </div>}
      {/* <div className="info_item">
        <p className="secondary-text info_title">Художник</p>
        <p className="info_desc">Теренс Марш, Питер Лэндсдаун Смит, Элизабет МакБрайд, Теренс Марш</p>
      </div>
      <div className="info_item">
        <p className="secondary-text info_title">Художник</p>
        <p className="info_desc">Теренс Марш, Питер Лэндсдаун Смит, Элизабет МакБрайд, Теренс Марш</p>
      </div>
      <div className="info_item">
        <p className="secondary-text info_title">Художник</p>
        <p className="info_desc">Теренс Марш, Питер Лэндсдаун Смит, Элизабет МакБрайд, Теренс Марш</p>
      </div>
      <div className="info_item">
        <p className="secondary-text info_title">Художник</p>
        <p className="info_desc">Теренс Марш, Питер Лэндсдаун Смит, Элизабет МакБрайд, Теренс Марш</p>
      </div>
      <div className="info_item">
        <p className="secondary-text info_title">Художник</p>
        <p className="info_desc">Теренс Марш, Питер Лэндсдаун Смит, Элизабет МакБрайд, Теренс Марш</p>
      </div> */}
    </div>
  )
}

export default FilmInfo