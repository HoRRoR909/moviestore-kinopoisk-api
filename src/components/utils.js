export const calcTotalPrice = items => items.reduce((acc, film) => acc += parseInt(film.year, 10) , 0)