import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { getEselonData } from '../actions/eselon.action'
import { EselonData } from '../../models/eselon.model'

interface typeOfInitialState {
    dataEselon: EselonData[],
    isLoading: boolean,
    isSuccess: boolean,
    errorMessage: string
  }
  
  const initialState: typeOfInitialState = {
    dataEselon: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
  }
  
  export const eselonSlice = createSlice({
    name: "Eselon",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getEselonData.pending, (state) => {
        state.isLoading = true
        state.errorMessage = ''
      })
  
      builder.addCase(getEselonData.fulfilled, (state, action: PayloadAction<EselonData[]>) => {
        state.dataEselon = action.payload
      })
  
      builder.addCase(getEselonData.rejected, (state, { payload }) => {
        if(payload){
          state.isSuccess = false;
        }
      })
    },
  })


  const eselonReducer = combineReducers({
    eselonAll: eselonSlice.reducer,
  });
  
  export default eselonReducer