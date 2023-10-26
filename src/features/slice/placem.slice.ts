import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { getPlacemData } from "../actions/placem.action";
import { PlacemData } from "../../models/placem.model";

interface typeOfInitialState {
  dataPlacem: PlacemData[];
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataPlacem: [],
  dataPerPage: 6,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const placemSlice = createSlice({
  name: "Placem",
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
    builder.addCase(getPlacemData.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getPlacemData.fulfilled, (state, action: PayloadAction<PlacemData[]>) => {
      state.dataPlacem = action.payload;
    });

    builder.addCase(getPlacemData.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

const placemReducer = combineReducers({
  placemAll: placemSlice.reducer,
});

export default placemReducer;
