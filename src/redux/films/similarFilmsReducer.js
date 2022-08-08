import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import filmsService from '../services/axiosFilmService'

export const getAxiosSimilarFilms = createAsyncThunk('GET_SIMILARFILMS', async (id, thunkAPI) => {

  try {
    return await filmsService.getSimilarFilms(id)
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const initialState = {
  similarFilms: [],
  isError: false,
  isSimilarFilmsLoading: false,
  isSimilarFilmsLoaded: false,
  status: null,
  message: ''
} 

const similarFilmsSlice = createSlice({
  name: "similarFilms",
  initialState,
  reducers: {

  },
  extraReducers: {
    [getAxiosSimilarFilms.pending]: (state) => {
      state.status = 'similar-pending'
      state.isLoading = true
      state.isInfoLoaded = false
      console.log('similar.pending');
    },
    [getAxiosSimilarFilms.fulfilled]: (state, action) => {
      state.status = 'similar-loading'
      state.isInfoLoaded = true
      state.isLoading = false
      state.similarFilms = action.payload.items
      console.log('similar.fulfilled');
    },
    [getAxiosSimilarFilms.rejected]: (state, action) => {
      state.status = 'similar-rejected'
      state.isLoading = false
      state.isInfoLoaded = false
      state.isError = true
      state.message = action.payload.message
      state.similarFilms = null
      console.log('similar.rejected');
    }
  }
})

export default similarFilmsSlice.reducer