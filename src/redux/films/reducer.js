import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentFilm: null
} 


const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setCurrentFilm: (state, action) => {
      state.currentFilm = action.payload
    }
  }
})

export const { setCurrentFilm } = filmsSlice.actions
export default filmsSlice.reducer