import { VitjenData } from "../../models/vitjen.model";
import { createVitjen, editVitjen, deleteVitjen, getVitjenAll, getVitjenById, getVitjenAllCount, getVitjenSearchAll, getVitjenSearchCount } from "../actions/vitjen.action";
import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";

interface typeOfInitialState {
  dataVitjen: VitjenData[];
  currentVitjen: VitjenData | null;
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataVitjen: [],
  currentVitjen: null,
  searchKeyword: "",
  dataPerPage: 6,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const createVitjenSlice = createSlice({
  name: "createVitjenReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createVitjen.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ADD VISUAL....");
    });

    builder.addCase(createVitjen.fulfilled, (state, action: PayloadAction<VitjenData>) => {
      state.currentVitjen = action.payload;
      console.log("ADD VISUAL SUCCESS");
    });

    builder.addCase(createVitjen.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ADD VISUAL");
        state.isSuccess = false;
      }
    });
  },
});

export const editVitjenSlice = createSlice({
  name: "editVitjenReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editVitjen.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING EDIT VISUAL....");
    });

    builder.addCase(editVitjen.fulfilled, (state, action: PayloadAction<VitjenData>) => {
      state.currentVitjen = action.payload;
      console.log("EDIT VISUAL SUCCESS");
    });

    builder.addCase(editVitjen.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED EDIT VISUAL");
        state.isSuccess = false;
      }
    });
  },
});

export const deleteVitjenSlice = createSlice({
  name: "deleteVitjenReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteVitjen.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING DELETE VISUAL....");
    });

    builder.addCase(deleteVitjen.fulfilled, (state, action: PayloadAction<VitjenData>) => {
      state.currentVitjen = action.payload;
      console.log("DELETE VISUAL SUCCESS");
    });

    builder.addCase(deleteVitjen.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED DELETE VISUAL");
        state.isSuccess = false;
      }
    });
  },
});

export const vitjenAllSlice = createSlice({
  name: "vitjenAllReducer",
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
    builder.addCase(getVitjenAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING VISUAL....");
    });

    builder.addCase(getVitjenAll.fulfilled, (state, action: PayloadAction<VitjenData[]>) => {
      state.dataVitjen = action.payload;
      console.log("Filled VISUAL");
    });

    builder.addCase(getVitjenAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED VISUAL");
        state.isSuccess = false;
      }
    });
  },
});

export const vitjenAllCountSlice = createSlice({
  name: "vitjenAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVitjenAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING VISUAL....");
    });

    builder.addCase(getVitjenAllCount.fulfilled, (state, action: PayloadAction<VitjenData[]>) => {
      state.dataVitjen = action.payload;
      console.log("Filled VISUAL");
    });

    builder.addCase(getVitjenAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED VISUAL");
        state.isSuccess = false;
      }
    });
  },
});

export const vitjenByIdSlice = createSlice({
  name: "vitjenByIdReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVitjenById.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING VISUAL....");
    });

    builder.addCase(getVitjenById.fulfilled, (state, action: PayloadAction<VitjenData[]>) => {
      state.dataVitjen = action.payload;
      console.log("Filled VISUAL");
    });

    builder.addCase(getVitjenById.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED VISUAL");
        state.isSuccess = false;
      }
    });
  },
});

export const vitjenSearchAllSlice = createSlice({
  name: "vitjenSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVitjenSearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING REPORT....");
    });

    builder.addCase(getVitjenSearchAll.fulfilled, (state, action: PayloadAction<VitjenData[]>) => {
      state.dataVitjen = action.payload;
      console.log("Filled REPORT");
    });

    builder.addCase(getVitjenSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED REPORT");
        state.isSuccess = false;
      }
    });
  },
});

export const vitjenSearchCountSlice = createSlice({
  name: "vitjenSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVitjenSearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING REPORT....");
    });

    builder.addCase(getVitjenSearchCount.fulfilled, (state, action: PayloadAction<VitjenData[]>) => {
      state.dataVitjen = action.payload;
      console.log("Filled REPORT");
    });

    builder.addCase(getVitjenSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED REPORT");
        state.isSuccess = false;
      }
    });
  },
});

const vitjenReducer = combineReducers({
    createVitjen: createVitjenSlice.reducer,
    editVitjen: editVitjenSlice.reducer,
    deleteVitjen: deleteVitjenSlice.reducer,
    vitjenAll: vitjenAllSlice.reducer,
    vitjenAllCount: vitjenAllCountSlice.reducer,
    vitjenId: vitjenByIdSlice.reducer,
    vitjenSearchAll: vitjenSearchAllSlice.reducer,
    vitjenSearchCount: vitjenSearchCountSlice.reducer,
  });
  
  export default vitjenReducer;
