import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import filmsService from '../services/axiosFilmService'

export const getAxiosFilmInfo = createAsyncThunk('GET_FILMINFO', async (id, thunkAPI) => {

  try {
    return await filmsService.getFilmInfo(id)
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const initialState = {
  currentFilmInfo: null,
  isError: false,
  isLoading: false,
  isInfoLoaded: false,
  status: null,
  message: ''
} 

const filmInfoSlice = createSlice({
  name: "filmInfo",
  initialState,
  reducers: {

  },
  extraReducers: {
    [getAxiosFilmInfo.pending]: (state) => {
      state.status = 'info-pending'
      state.isLoading = true
      state.isInfoLoaded = false
      console.log('info.pending');
    },
    [getAxiosFilmInfo.fulfilled]: (state, action) => {
      state.status = 'info-loading'
      state.isInfoLoaded = true
      state.isLoading = false
      state.currentFilmInfo = action.payload
      console.log('info.fulfilled');
    },
    [getAxiosFilmInfo.rejected]: (state, action) => {
      state.status = 'info-rejected'
      state.isLoading = false
      state.isInfoLoaded = false
      state.isError = true
      state.message = action.payload.message
      state.currentFilmInfo = null
      console.log('info.rejected');
    }
  }
})

export default filmInfoSlice.reducer