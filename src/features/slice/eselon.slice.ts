import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { createEselon, editEselon, deleteEselon, getEselonData } from '../actions/eselon.action'
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

  export const createEselonSlice = createSlice({
    name: "createEselonReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(createEselon.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING ADD ESELON....");
      });
  
      builder.addCase(createEselon.fulfilled, (state, action: PayloadAction<EselonData[]>) => {
        state.dataEselon = action.payload;
        console.log("ADD ESELON SUCCESS");
      });
  
      builder.addCase(createEselon.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED ADD ESELON");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const editEselonSlice = createSlice({
    name: "editEselonReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(editEselon.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING EDIT ESELON....");
      });
  
      builder.addCase(editEselon.fulfilled, (state, action: PayloadAction<EselonData[]>) => {
        state.dataEselon = action.payload;
        console.log("EDIT ESELON SUCCESS");
      });
  
      builder.addCase(editEselon.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED EDIT ESELON");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const deleteEselonSlice = createSlice({
    name: "deleteEselonReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(deleteEselon.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING DELETE ESELON....");
      });
  
      builder.addCase(deleteEselon.fulfilled, (state, action: PayloadAction<EselonData[]>) => {
        state.dataEselon = action.payload;
        console.log("DELETE ESELON SUCCESS");
      });
  
      builder.addCase(deleteEselon.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED DELETE ESELON");
          state.isSuccess = false;
        }
      });
    },
  });
  
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