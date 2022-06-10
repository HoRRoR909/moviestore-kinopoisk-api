import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import filmsService from '../services/axiosFilmService'

export const getFilms = createAsyncThunk('GET_FILMS', async (_, thunkAPI) => {
  try {
    return await filmsService.getFilms()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const initialState = {
  films: null,
  currentFilm: null,
  isError: false,
  isLoading: false,
  status: null,
  message: ''
} 


const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setCurrentFilm: (state, action) => {
      state.currentFilm = action.payload
    }
  },
  extraReducers: {
    [getFilms.pending]: (state) => {
      state.status = 'pending'
      state.isLoading = true
      console.log('films.pending');
    },
    [getFilms.fulfilled]: (state, action) => {
      state.status = 'loading'
      state.isLoading = false
      state.films = action.payload.films
      console.log('films.fulfilled');
    },
    [getFilms.rejected]: (state, action) => {
      state.status = 'rejected'
      state.isLoading = false
      state.isError = true
      state.message = action.payload.message
      state.films = null
      console.log('films.rejected');
    }
  }
})

export const { setCurrentFilm } = filmsSlice.actions
export default filmsSlice.reducer