import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { createAuditoria, editAuditoria, deleteAuditoria, getAuditoriaData, getAuditoriaTake } from '../actions/auditoria.action'
import { AuditoriaData } from '../../models/auditoria.model'

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

  export const createAuditoriaSlice = createSlice({
    name: "createAuditoriaReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(createAuditoria.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING ADD AUDITORIA....");
      });
  
      builder.addCase(createAuditoria.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
        state.dataAuditoria = action.payload;
        console.log("ADD AUDITORIA SUCCESS");
      });
  
      builder.addCase(createAuditoria.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED ADD AUDITORIA");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const editAuditoriaSlice = createSlice({
    name: "editAuditoriaReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(editAuditoria.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING EDIT AUDITORIA....");
      });
  
      builder.addCase(editAuditoria.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
        state.dataAuditoria = action.payload;
        console.log("EDIT AUDITORIA SUCCESS");
      });
  
      builder.addCase(editAuditoria.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED EDIT AUDITORIA");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const deleteAuditoriaSlice = createSlice({
    name: "deleteAuditoriaReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(deleteAuditoria.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING DELETE AUDITORIA....");
      });
  
      builder.addCase(deleteAuditoria.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
        state.dataAuditoria = action.payload;
        console.log("DELETE AUDITORIA SUCCESS");
      });
  
      builder.addCase(deleteAuditoria.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED DELETE AUDITORIA");
          state.isSuccess = false;
        }
      });
    },
  });
  
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
    createAuditoria: createAuditoriaSlice.reducer,
    editAuditoria: editAuditoriaSlice.reducer,
    deleteAuditoria: deleteAuditoriaSlice.reducer,
    auditoriaAll: auditoriaSlice.reducer,
    auditoriaTake: auditoriaTakeSlice.reducer,
  });
  
  export default auditoriaReducer