import axios from 'axios'

const getFilms = async () => {
  
  const films = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', {
    method: 'GET',
    headers: {
        'X-API-KEY': 'f7c6dade-b50f-4348-b700-aabf55358bff',
        'Content-Type': 'application/json',
    },
})
    
  return films.data
}

const filmsService = {
  getFilms
}

export default filmsService