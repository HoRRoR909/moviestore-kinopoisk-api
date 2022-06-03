import { configureStore } from "@reduxjs/toolkit"
import cartReduser from './cart/reducer'

export const store = configureStore({
  reducer: {
    cart: cartReduser,
  }
})