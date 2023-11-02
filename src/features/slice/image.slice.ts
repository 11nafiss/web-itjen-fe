import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { createImage, editImage, deleteImage, getImageData } from '../actions/image.action'
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

  export const createImageSlice = createSlice({
    name: "createImageReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(createImage.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING ADD IMAGE....");
      });
  
      builder.addCase(createImage.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
        state.dataImage = action.payload;
        console.log("ADD IMAGE SUCCESS");
      });
  
      builder.addCase(createImage.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED ADD IMAGE");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const editImageSlice = createSlice({
    name: "editImageReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(editImage.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING EDIT IMAGE....");
      });
  
      builder.addCase(editImage.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
        state.dataImage = action.payload;
        console.log("EDIT IMAGE SUCCESS");
      });
  
      builder.addCase(editImage.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED EDIT IMAGE");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const deleteImageSlice = createSlice({
    name: "deleteImageReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(deleteImage.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING DELETE IMAGE....");
      });
  
      builder.addCase(deleteImage.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
        state.dataImage = action.payload;
        console.log("DELETE IMAGE SUCCESS");
      });
  
      builder.addCase(deleteImage.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED DELETE IMAGE");
          state.isSuccess = false;
        }
      });
    },
  });
  
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