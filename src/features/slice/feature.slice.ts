import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { getFeatureData } from '../actions/feature.action'
import { FeatureData } from '../../models/feature.model'

interface typeOfInitialState {
    dataFeature: FeatureData[],
    isLoading: boolean,
    isSuccess: boolean,
    errorMessage: string
  }
  
  const initialState: typeOfInitialState = {
    dataFeature: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
  }
  
  export const featureSlice = createSlice({
    name: "Feature",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getFeatureData.pending, (state) => {
        state.isLoading = true
        state.errorMessage = ''
      })
  
      builder.addCase(getFeatureData.fulfilled, (state, action: PayloadAction<FeatureData[]>) => {
        state.dataFeature = action.payload
      })
  
      builder.addCase(getFeatureData.rejected, (state, { payload }) => {
        if(payload){
          state.isSuccess = false;
        }
      })
    },
  })
  
  

  const featureReducer = combineReducers({
    featureAll: featureSlice.reducer,
  });
  
  export default featureReducer