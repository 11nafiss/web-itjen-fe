import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { getImageData } from '../actions/image.action'
import { ImageData } from '../../models/image.model'

interface typeOfInitialState {
    dataImage: ImageData[],
    isLoading: boolean,
    isSuccess: boolean,
    errorMessage: string
  }
  
  const initialState: typeOfInitialState = {
    dataImage: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
  }
  
  export const imageSlice = createSlice({
    name: "Image",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getImageData.pending, (state) => {
        state.isLoading = true
        state.errorMessage = ''
      })
  
      builder.addCase(getImageData.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
        state.dataImage = action.payload
      })
  
      builder.addCase(getImageData.rejected, (state, { payload }) => {
        if(payload){
          state.isSuccess = false;
        }
      })
    },
  })
  

  const imageReducer = combineReducers({
    imageAll: imageSlice.reducer,
  });
  
  export default imageReducer