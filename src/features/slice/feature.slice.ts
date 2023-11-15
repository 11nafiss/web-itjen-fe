import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createFeature, editFeature, deleteFeature, getFeatureData, getFeatureSearchCount, getFeatureSearchAll, getFeatureAllCount, getFeatureAllTake } from "../actions/feature.action";
import { FeatureData } from "../../models/feature.model";

interface typeOfInitialState {
  dataFeature: FeatureData[];
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataFeature: [],
  searchKeyword: "",
  dataPerPage: 5,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const createFeatureSlice = createSlice({
  name: "createFeatureReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createFeature.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ADD FEATURE....");
    });

    builder.addCase(createFeature.fulfilled, (state, action: PayloadAction<FeatureData[]>) => {
      state.dataFeature = action.payload;
      console.log("ADD FEATURE SUCCESS");
    });

    builder.addCase(createFeature.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ADD FEATURE");
        state.isSuccess = false;
      }
    });
  },
});

export const editFeatureSlice = createSlice({
  name: "editFeatureReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editFeature.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING EDIT FEATURE....");
    });

    builder.addCase(editFeature.fulfilled, (state, action: PayloadAction<FeatureData[]>) => {
      state.dataFeature = action.payload;
      console.log("EDIT FEATURE SUCCESS");
    });

    builder.addCase(editFeature.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED EDIT FEATURE");
        state.isSuccess = false;
      }
    });
  },
});

export const deleteFeatureSlice = createSlice({
  name: "deleteFeatureReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteFeature.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING DELETE FEATURE....");
    });

    builder.addCase(deleteFeature.fulfilled, (state, action: PayloadAction<FeatureData[]>) => {
      state.dataFeature = action.payload;
      console.log("DELETE FEATURE SUCCESS");
    });

    builder.addCase(deleteFeature.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED DELETE FEATURE");
        state.isSuccess = false;
      }
    });
  },
});

export const featureSlice = createSlice({
  name: "Feature",
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
    builder.addCase(getFeatureData.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getFeatureData.fulfilled, (state, action: PayloadAction<FeatureData[]>) => {
      state.dataFeature = action.payload;
    });

    builder.addCase(getFeatureData.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const featureAllTakeSlice = createSlice({
  name: "featureAllTake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeatureAllTake.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getFeatureAllTake.fulfilled, (state, action: PayloadAction<FeatureData[]>) => {
      state.dataFeature = action.payload;
    });

    builder.addCase(getFeatureAllTake.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const featureAllCountSlice = createSlice({
  name: "featureAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeatureAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING FEATURE....");
    });

    builder.addCase(getFeatureAllCount.fulfilled, (state, action: PayloadAction<FeatureData[]>) => {
      state.dataFeature = action.payload;
      console.log("Filled FEATURE");
    });

    builder.addCase(getFeatureAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED FEATURE");
        state.isSuccess = false;
      }
    });
  },
});

export const featureSearchAllSlice = createSlice({
  name: "featureSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFeatureSearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING FEATURE....");
    });

    builder.addCase(getFeatureSearchAll.fulfilled, (state, action: PayloadAction<FeatureData[]>) => {
      state.dataFeature = action.payload;
      console.log("Filled FEATURE");
    });

    builder.addCase(getFeatureSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED FEATURE");
        state.isSuccess = false;
      }
    });
  },
});

export const featureSearchCountSlice = createSlice({
  name: "featureSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeatureSearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING FEATURE....");
    });

    builder.addCase(getFeatureSearchCount.fulfilled, (state, action: PayloadAction<FeatureData[]>) => {
      state.dataFeature = action.payload;
      console.log("Filled FEATURE");
    });

    builder.addCase(getFeatureSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED FEATURE");
        state.isSuccess = false;
      }
    });
  },
});

const featureReducer = combineReducers({
  createFeature: createFeatureSlice.reducer,
  editFeature: editFeatureSlice.reducer,
  deleteFeature: deleteFeatureSlice.reducer,
  featureAll: featureSlice.reducer,
  featureAllTake: featureAllTakeSlice.reducer,
  featureAllCount: featureAllCountSlice.reducer,
  featureSearchAll: featureSearchAllSlice.reducer,
  featureSearchCount: featureSearchCountSlice.reducer,
});

export default featureReducer;
