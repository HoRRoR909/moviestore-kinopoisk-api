import { configureStore } from "@reduxjs/toolkit"
import cartReduser from './cart/reducer'
import filmInfoReducer from "./films/filmInfoReducer"
import filmsReduser from './films/filmsReducer'
import filmImagesReducer from './films/filmImagesReducer'
import similarFilmsReducer from "./films/similarFilmsReducer"

export const store = configureStore({
  reducer: {
    cart: cartReduser,
    filmsReducer: filmsReduser,
    filmInfoReducer: filmInfoReducer,
    filmImagesReducer: filmImagesReducer,
    similarFilmsReducer: similarFilmsReducer
  }
})