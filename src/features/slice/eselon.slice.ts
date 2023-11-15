import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createEselon, editEselon, deleteEselon, getEselonData, getEselonSearchCount, getEselonSearchAll, getEselonAllCount, getEselonAllTake } from "../actions/eselon.action";
import { EselonData } from "../../models/eselon.model";

interface typeOfInitialState {
  dataEselon: EselonData[];
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataEselon: [],
  searchKeyword: "",
  dataPerPage: 5,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

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
    builder.addCase(getEselonData.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getEselonData.fulfilled, (state, action: PayloadAction<EselonData[]>) => {
      state.dataEselon = action.payload;
    });

    builder.addCase(getEselonData.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const eselonAllTakeSlice = createSlice({
  name: "eselonAllTake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEselonAllTake.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getEselonAllTake.fulfilled, (state, action: PayloadAction<EselonData[]>) => {
      state.dataEselon = action.payload;
    });

    builder.addCase(getEselonAllTake.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const eselonAllCountSlice = createSlice({
  name: "eselonAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEselonAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ESELON....");
    });

    builder.addCase(getEselonAllCount.fulfilled, (state, action: PayloadAction<EselonData[]>) => {
      state.dataEselon = action.payload;
      console.log("Filled ESELON");
    });

    builder.addCase(getEselonAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ESELON");
        state.isSuccess = false;
      }
    });
  },
});

export const eselonSearchAllSlice = createSlice({
  name: "eselonSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEselonSearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ESELON....");
    });

    builder.addCase(getEselonSearchAll.fulfilled, (state, action: PayloadAction<EselonData[]>) => {
      state.dataEselon = action.payload;
      console.log("Filled ESELON");
    });

    builder.addCase(getEselonSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ESELON");
        state.isSuccess = false;
      }
    });
  },
});

export const eselonSearchCountSlice = createSlice({
  name: "eselonSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEselonSearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ESELON....");
    });

    builder.addCase(getEselonSearchCount.fulfilled, (state, action: PayloadAction<EselonData[]>) => {
      state.dataEselon = action.payload;
      console.log("Filled ESELON");
    });

    builder.addCase(getEselonSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ESELON");
        state.isSuccess = false;
      }
    });
  },
});

const eselonReducer = combineReducers({
  createEselon: createEselonSlice.reducer,
  editEselon: editEselonSlice.reducer,
  deleteEselon: deleteEselonSlice.reducer,
  eselonAll: eselonSlice.reducer,
  eselonAllTake: eselonAllTakeSlice.reducer,
  eselonAllCount: eselonAllCountSlice.reducer,
  eselonSearchAll: eselonSearchAllSlice.reducer,
  eselonSearchCount: eselonSearchCountSlice.reducer,
});

export default eselonReducer;
