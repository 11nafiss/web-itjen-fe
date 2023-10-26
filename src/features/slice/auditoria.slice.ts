import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { getAuditoriaData, getAuditoriaTake } from '../actions/auditoria.action'
import { AuditoriaData } from '../../models/auditoria.model'
import { auditoriaService } from '../../services/auditoria.service'

interface typeOfInitialState {
    dataAuditoria: AuditoriaData[],
    dataPerPage: number,
    currentPage: number,
    isLoading: boolean,
    isSuccess: boolean,
    errorMessage: string
  }
  
  const initialState: typeOfInitialState = {
    dataAuditoria: [],
    dataPerPage: 6,
    currentPage: 1,
    isLoading: false,
    isSuccess: false,
    errorMessage: '',
  }
  
  export const auditoriaSlice = createSlice({
    name: "auditoriaAll",
    initialState,
    reducers: {
      onNavigateNext: (state) => {state.currentPage++},
      onNavigatePrev: (state) => {state.currentPage--},
      onChangeDataPerPage: (state, action) => {state.dataPerPage = action.payload},
      onClickCurrentPage: (state, action) => {state.currentPage = action.payload},
    },
    extraReducers: (builder) => {
        builder.addCase(getAuditoriaData.pending, (state) => {
        state.isLoading = true
        state.errorMessage = ''
      })
  
      builder.addCase(getAuditoriaData.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
        state.dataAuditoria = action.payload
      })
  
      builder.addCase(getAuditoriaData.rejected, (state, { payload }) => {
        if(payload){
          state.isSuccess = false;
        }
      })
    },
  })

  export const auditoriaTakeSlice = createSlice({
    name: "auditoriaTake",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getAuditoriaTake.pending, (state) => {
        state.isLoading = true
        state.errorMessage = ''
      })
  
      builder.addCase(getAuditoriaTake.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
        state.dataAuditoria = action.payload
      })
  
      builder.addCase(getAuditoriaTake.rejected, (state, { payload }) => {
        if(payload){
          state.isSuccess = false;
        }
      })
    },
  })
  
  const auditoriaReducer = combineReducers({
    auditoriaAll: auditoriaSlice.reducer,
    auditoriaTake: auditoriaTakeSlice.reducer,
  });
  
  export default auditoriaReducer