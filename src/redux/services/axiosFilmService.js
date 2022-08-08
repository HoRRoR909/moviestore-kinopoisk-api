import axios from 'axios'

const apiKey = 'f7c6dade-b50f-4348-b700-aabf55358bff'

const getFilms = async (currentPage) => {

  const films = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${currentPage}`, 
    {
    method: 'GET',
    headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
    },
  })
    
  return films.data
}



const getFilmInfo = async (id) => {

  const filmInfo = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, 
    {
    method: 'GET',
    headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
    },
  })

  return filmInfo.data
}

const getFilmImages = async (id) => {

  const filmImages = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL&page=1`, 
    
    {
    method: 'GET',
    headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
    },
  })

  return filmImages.data
}

const getSimilarFilms = async (id) => {

  const similarFilms = await axios.get(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, 
    
    {
    method: 'GET',
    headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
    },
  })
  console.log(similarFilms.data);
  return similarFilms.data
}

const filmsService = {
  getFilms,
  getFilmInfo,
  getFilmImages,
  getSimilarFilms
}

export default filmsService 