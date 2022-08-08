import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import filmsService from '../services/axiosFilmService'

export const getAxiosFilmImages = createAsyncThunk('GET_FILMIMAGES', async (id, thunkAPI) => {

  try {
    return await filmsService.getFilmImages(id)
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const initialState = {
  currentFilmImages: null,
  isError: false,
  isImageLoaded: false,
  message: ''
} 

const filmImagesSlice = createSlice({
  name: "filmImages",
  initialState,
  reducers: {

  },
  extraReducers: {
    [getAxiosFilmImages.pending]: (state) => {
      state.isImageLoaded = false
      console.log('images.pending');
    },
    [getAxiosFilmImages.fulfilled]: (state, action) => {
      state.isImageLoaded = true
      state.currentFilmImages = action.payload.items
      console.log('images.fulfilled');
    },
    [getAxiosFilmImages.rejected]: (state, action) => {
      state.isImageLoaded = false
      state.isError = true
      state.message = action.payload.message
      state.currentFilmImages = null
      console.log('images.rejected');
    }
  }
})

export default filmImagesSlice.reducer