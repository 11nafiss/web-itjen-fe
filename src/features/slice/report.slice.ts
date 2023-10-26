import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { createReport, editReport, deleteReport, getReportData, getReportTake } from '../actions/report.action'
import { ReportData } from '../../models/report.models'

interface typeOfInitialState {
    dataReport: ReportData[],
    dataPerPage: number,
    currentPage: number,
    isLoading: boolean,
    isSuccess: boolean,
    errorMessage: string
  }
  
  const initialState: typeOfInitialState = {
    dataReport: [],
    dataPerPage: 6,
    currentPage: 1,
    isLoading: false,
    isSuccess: false,
    errorMessage: '',
  }

  export const createReportSlice = createSlice({
    name: "createReportReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(createReport.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING ADD REPORT....");
      });
  
      builder.addCase(createReport.fulfilled, (state, action: PayloadAction<ReportData[]>) => {
        state.dataReport = action.payload;
        console.log("ADD REPORT SUCCESS");
      });
  
      builder.addCase(createReport.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED ADD REPORT");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const editReportSlice = createSlice({
    name: "editReportReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(editReport.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING EDIT REPORT....");
      });
  
      builder.addCase(editReport.fulfilled, (state, action: PayloadAction<ReportData[]>) => {
        state.dataReport = action.payload;
        console.log("EDIT REPORT SUCCESS");
      });
  
      builder.addCase(editReport.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED EDIT REPORT");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const deleteReportSlice = createSlice({
    name: "deleteReportReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(deleteReport.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING DELETE REPORT....");
      });
  
      builder.addCase(deleteReport.fulfilled, (state, action: PayloadAction<ReportData[]>) => {
        state.dataReport = action.payload;
        console.log("DELETE REPORT SUCCESS");
      });
  
      builder.addCase(deleteReport.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED DELETE REPORT");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const reportSlice = createSlice({
    name: "reportAll",
    initialState,
    reducers: {
      onNavigateNext: (state) => {state.currentPage++},
      onNavigatePrev: (state) => {state.currentPage--},
      onChangeDataPerPage: (state, action) => {state.dataPerPage = action.payload},
      onClickCurrentPage: (state, action) => {state.currentPage = action.payload},
    },
    extraReducers: (builder) => {
        builder.addCase(getReportData.pending, (state) => {
        state.isLoading = true
        state.errorMessage = ''
      })
  
      builder.addCase(getReportData.fulfilled, (state, action: PayloadAction<ReportData[]>) => {
        state.dataReport = action.payload
      })
  
      builder.addCase(getReportData.rejected, (state, { payload }) => {
        if(payload){
          state.isSuccess = false;
        }
      })
    },
  })

  export const reportTakeSlice = createSlice({
    name: "reportTake",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getReportTake.pending, (state) => {
        state.isLoading = true
        state.errorMessage = ''
      })
  
      builder.addCase(getReportTake.fulfilled, (state, action: PayloadAction<ReportData[]>) => {
        state.dataReport = action.payload
      })
  
      builder.addCase(getReportTake.rejected, (state, { payload }) => {
        if(payload){
          state.isSuccess = false;
        }
      })
    },
  })
  
  const reportReducer = combineReducers({
    createReport: createReportSlice.reducer,
    editReport: editReportSlice.reducer,
    deleteReport: deleteReportSlice.reducer,
    reportAll: reportSlice.reducer,
    reportTake: reportTakeSlice.reducer,
  });
  
  export default reportReducer