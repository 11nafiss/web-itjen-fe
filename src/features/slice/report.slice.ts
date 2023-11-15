import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createReport, editReport, deleteReport, getReportData, getReportAllTake, getReportSearchCount, getReportSearchAll, getReportAllCount } from "../actions/report.action";
import { ReportData } from "../../models/report.models";

interface typeOfInitialState {
  dataReport: ReportData[];
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataReport: [],
  searchKeyword: "",
  dataPerPage: 6,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

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
    onNavigateNext: (state) => {
      state.currentPage++;
    },
    onNavigatePrev: (state) => {
      state.currentPage--;
    },
    onChangeDataPerPage: (state, action) => {
      state.dataPerPage = action.payload;
    },
    onClickCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getReportData.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getReportData.fulfilled, (state, action: PayloadAction<ReportData[]>) => {
      state.dataReport = action.payload;
    });

    builder.addCase(getReportData.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const reportAllTakeSlice = createSlice({
  name: "reportAllTake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReportAllTake.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getReportAllTake.fulfilled, (state, action: PayloadAction<ReportData[]>) => {
      state.dataReport = action.payload;
    });

    builder.addCase(getReportAllTake.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const reportAllCountSlice = createSlice({
  name: "reportAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReportAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING REPORT....");
    });

    builder.addCase(getReportAllCount.fulfilled, (state, action: PayloadAction<ReportData[]>) => {
      state.dataReport = action.payload;
      console.log("Filled REPORT");
    });

    builder.addCase(getReportAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED REPORT");
        state.isSuccess = false;
      }
    });
  },
});

export const reportSearchAllSlice = createSlice({
  name: "reportSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getReportSearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING REPORT....");
    });

    builder.addCase(getReportSearchAll.fulfilled, (state, action: PayloadAction<ReportData[]>) => {
      state.dataReport = action.payload;
      console.log("Filled REPORT");
    });

    builder.addCase(getReportSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED REPORT");
        state.isSuccess = false;
      }
    });
  },
});

export const reportSearchCountSlice = createSlice({
  name: "reportSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReportSearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING REPORT....");
    });

    builder.addCase(getReportSearchCount.fulfilled, (state, action: PayloadAction<ReportData[]>) => {
      state.dataReport = action.payload;
      console.log("Filled REPORT");
    });

    builder.addCase(getReportSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED REPORT");
        state.isSuccess = false;
      }
    });
  },
});

const reportReducer = combineReducers({
  createReport: createReportSlice.reducer,
  editReport: editReportSlice.reducer,
  deleteReport: deleteReportSlice.reducer,
  reportAll: reportSlice.reducer,
  reportAllTake: reportAllTakeSlice.reducer,
  reportAllCount: reportAllCountSlice.reducer,
  reportSearchAll: reportSearchAllSlice.reducer,
  reportSearchCount: reportSearchCountSlice.reducer,
});

export default reportReducer;
