import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createPlacem, editPlacem, deletePlacem, getPlacemData, getPlacemSearchCount, getPlacemSearchAll, getPlacemAllCount, getPlacemAllTake } from "../actions/placem.action";
import { PlacemData } from "../../models/placem.model";

interface typeOfInitialState {
  dataPlacem: PlacemData[];
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataPlacem: [],
  searchKeyword: "",
  dataPerPage: 5,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const createPlacemSlice = createSlice({
  name: "createPlacemReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPlacem.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ADD PLACEMAN....");
    });

    builder.addCase(createPlacem.fulfilled, (state, action: PayloadAction<PlacemData[]>) => {
      state.dataPlacem = action.payload;
      console.log("ADD PLACEMAN SUCCESS");
    });

    builder.addCase(createPlacem.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ADD PLACEMAN");
        state.isSuccess = false;
      }
    });
  },
});

export const editPlacemSlice = createSlice({
  name: "editPlacemReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editPlacem.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING EDIT PLACEMAN....");
    });

    builder.addCase(editPlacem.fulfilled, (state, action: PayloadAction<PlacemData[]>) => {
      state.dataPlacem = action.payload;
      console.log("EDIT PLACEMAN SUCCESS");
    });

    builder.addCase(editPlacem.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED EDIT PLACEMAN");
        state.isSuccess = false;
      }
    });
  },
});

export const deletePlacemSlice = createSlice({
  name: "deletePlacemReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deletePlacem.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING DELETE PLACEMAN....");
    });

    builder.addCase(deletePlacem.fulfilled, (state, action: PayloadAction<PlacemData[]>) => {
      state.dataPlacem = action.payload;
      console.log("DELETE PLACEMAN SUCCESS");
    });

    builder.addCase(deletePlacem.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED DELETE PLACEMAN");
        state.isSuccess = false;
      }
    });
  },
});

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

export const placemAllTakeSlice = createSlice({
  name: "placemAllTake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlacemAllTake.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getPlacemAllTake.fulfilled, (state, action: PayloadAction<PlacemData[]>) => {
      state.dataPlacem = action.payload;
    });

    builder.addCase(getPlacemAllTake.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const placemAllCountSlice = createSlice({
  name: "placemAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlacemAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING PLACEM....");
    });

    builder.addCase(getPlacemAllCount.fulfilled, (state, action: PayloadAction<PlacemData[]>) => {
      state.dataPlacem = action.payload;
      console.log("Filled PLACEM");
    });

    builder.addCase(getPlacemAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED PLACEM");
        state.isSuccess = false;
      }
    });
  },
});

export const placemSearchAllSlice = createSlice({
  name: "placemSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPlacemSearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING PLACEM....");
    });

    builder.addCase(getPlacemSearchAll.fulfilled, (state, action: PayloadAction<PlacemData[]>) => {
      state.dataPlacem = action.payload;
      console.log("Filled PLACEM");
    });

    builder.addCase(getPlacemSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED PLACEM");
        state.isSuccess = false;
      }
    });
  },
});

export const placemSearchCountSlice = createSlice({
  name: "placemSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlacemSearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING PLACEM....");
    });

    builder.addCase(getPlacemSearchCount.fulfilled, (state, action: PayloadAction<PlacemData[]>) => {
      state.dataPlacem = action.payload;
      console.log("Filled PLACEM");
    });

    builder.addCase(getPlacemSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED PLACEM");
        state.isSuccess = false;
      }
    });
  },
});

const placemReducer = combineReducers({
  createPlacem: createPlacemSlice.reducer,
  editPlacem: editPlacemSlice.reducer,
  deletePlacem: deletePlacemSlice.reducer,
  placemAll: placemSlice.reducer,
  placemAllTake: placemAllTakeSlice.reducer,
  placemAllCount: placemAllCountSlice.reducer,
  placemSearchAll: placemSearchAllSlice.reducer,
  placemSearchCount: placemSearchCountSlice.reducer,
});

export default placemReducer;
