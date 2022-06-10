import axios from 'axios'

const getFilms = async () => {
  
  const films = await axios.get('https://my-json-server.typicode.com/HoRRoR909/moviestore-json/films')
    
  return films.data
}

const filmsService = {
  getFilms
}

export default filmsService