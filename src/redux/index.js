import { configureStore } from "@reduxjs/toolkit"
import cartReduser from './cart/reducer'
import filmsReduser from './films/reducer'

export const store = configureStore({
  reducer: {
    cart: cartReduser,
    filmsReducer: filmsReduser
  }
})