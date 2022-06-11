import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import filmsService from '../services/axiosFilmService'

export const getAxiosFilms = createAsyncThunk('GET_FILMS', async (currentPage, _, thunkAPI) => {

  try {
    return await filmsService.getFilms(currentPage)
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})
const initialState = {
  searchParams: [],
  films: null,
  currentFilm: null,
  currentPage: 1,
  totalPages: null,
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
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    }
  },
  extraReducers: {
    [getAxiosFilms.pending]: (state) => {
      state.status = 'pending'
      state.isLoading = true
      console.log('films.pending');
    },
    [getAxiosFilms.fulfilled]: (state, action) => {
      state.status = 'loading'
      state.isLoading = false
      state.films = action.payload.films
      state.totalPages = action.payload.pagesCount
      console.log('films.fulfilled');
    },
    [getAxiosFilms.rejected]: (state, action) => {
      state.status = 'rejected'
      state.isLoading = false
      state.isError = true
      state.message = action.payload.message
      state.films = null
      console.log('films.rejected');
    }
  }
})

export const { setCurrentFilm, setCurrentPage } = filmsSlice.actions
export default filmsSlice.reducer