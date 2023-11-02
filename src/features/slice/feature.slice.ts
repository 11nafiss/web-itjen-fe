import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createFeature, editFeature, deleteFeature, getFeatureData } from "../actions/feature.action";
import { FeatureData } from "../../models/feature.model";

interface typeOfInitialState {
  dataFeature: FeatureData[];
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataFeature: [],
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
  reducers: {},
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

const featureReducer = combineReducers({
  featureAll: featureSlice.reducer,
});

export default featureReducer;
