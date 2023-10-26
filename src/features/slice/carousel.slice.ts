import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { getCarouselImage } from '../actions/carousel.action'
import { CarouselImageData } from '../../models/carousel.model'

interface typeOfInitialState {
  pathGambar: CarouselImageData[],
  isLoading: boolean,
  isSuccess: boolean,
  errorMessage: string
}

const initialState: typeOfInitialState = {
  pathGambar: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
}

export const carouselSlice = createSlice({
  name: "carouselImage",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
      builder.addCase(getCarouselImage.pending, (state) => {
      state.isLoading = true
      state.errorMessage = ''
    })

    builder.addCase(getCarouselImage.fulfilled, (state, action: PayloadAction<CarouselImageData[]>) => {
      state.pathGambar = action.payload
    })

    builder.addCase(getCarouselImage.rejected, (state, { payload }) => {
      if(payload){
        state.isSuccess = false;
      }
    })
  },
})

// export const { getCarousel } = carouselSlice.actions;

// export default carouselSlice.reducer;

const carouselReducer = combineReducers({
  carouselAll: carouselSlice.reducer,
});

export default carouselReducer