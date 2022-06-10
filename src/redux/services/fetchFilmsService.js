
const getFilms = async () => {
  const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?page=1', {
    method: 'GET',
    headers: {
        'X-API-KEY': 'f7c6dade-b50f-4348-b700-aabf55358bff',
        'Content-Type': 'application/json',
    },
})
  const data = await response.json();

  return data;
}

const filmsService = {
  getFilms
}

export default filmsService