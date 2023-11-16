import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createAuditoria, editAuditoria, deleteAuditoria, getAuditoriaData, getAuditoriaAllTake, getAuditoriaSearchAll, getAuditoriaSearchCount, getAuditoriaAllCount, getAuditoriaById, getAuditoriaTahunAll, getAuditoriaTahunCount } from "../actions/auditoria.action";
import { AuditoriaData } from "../../models/auditoria.model";

interface typeOfInitialState {
  dataAuditoria: AuditoriaData[];
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataAuditoria: [],
  searchKeyword: "",
  dataPerPage: 6,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

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
    builder.addCase(getAuditoriaData.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getAuditoriaData.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
      state.dataAuditoria = action.payload;
    });

    builder.addCase(getAuditoriaData.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const auditoriaAllTakeSlice = createSlice({
  name: "auditoriaAllTake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuditoriaAllTake.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getAuditoriaAllTake.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
      state.dataAuditoria = action.payload;
    });

    builder.addCase(getAuditoriaAllTake.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const auditoriaAllCountSlice = createSlice({
  name: "auditoriaAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuditoriaAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING AUDITORIA....");
    });

    builder.addCase(getAuditoriaAllCount.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
      state.dataAuditoria = action.payload;
      console.log("Filled AUDITORIA");
    });

    builder.addCase(getAuditoriaAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED AUDITORIA");
        state.isSuccess = false;
      }
    });
  },
});

export const auditoriaSearchAllSlice = createSlice({
  name: "auditoriaSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuditoriaSearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING AUDITORIA....");
    });

    builder.addCase(getAuditoriaSearchAll.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
      state.dataAuditoria = action.payload;
      console.log("Filled AUDITORIA");
    });

    builder.addCase(getAuditoriaSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED AUDITORIA");
        state.isSuccess = false;
      }
    });
  },
});

export const auditoriaSearchCountSlice = createSlice({
  name: "auditoriaSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuditoriaSearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING AUDITORIA....");
    });

    builder.addCase(getAuditoriaSearchCount.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
      state.dataAuditoria = action.payload;
      console.log("Filled AUDITORIA");
    });

    builder.addCase(getAuditoriaSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED AUDITORIA");
        state.isSuccess = false;
      }
    });
  },
});

export const auditoriaByIdSlice = createSlice({
  name: "auditoriaByIdReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuditoriaById.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING AUDITORIA....");
    });

    builder.addCase(getAuditoriaById.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
      state.dataAuditoria = action.payload;
      console.log("Filled AUDITORIA");
    });

    builder.addCase(getAuditoriaById.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED AUDITORIA");
        state.isSuccess = false;
      }
    });
  },
});

export const auditoriaTahunAllSlice = createSlice({
  name: "auditoriaTahunReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuditoriaTahunAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING AUDITORIA....");
    });

    builder.addCase(getAuditoriaTahunAll.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
      state.dataAuditoria = action.payload;
      console.log("Filled AUDITORIA");
    });

    builder.addCase(getAuditoriaTahunAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED AUDITORIA");
        state.isSuccess = false;
      }
    });
  },
});

export const auditoriaTahunCountSlice = createSlice({
  name: "auditoriaTahunCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuditoriaTahunCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING AUDITORIA....");
    });

    builder.addCase(getAuditoriaTahunCount.fulfilled, (state, action: PayloadAction<AuditoriaData[]>) => {
      state.dataAuditoria = action.payload;
      console.log("Filled AUDITORIA");
    });

    builder.addCase(getAuditoriaTahunCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED AUDITORIA");
        state.isSuccess = false;
      }
    });
  },
});

const auditoriaReducer = combineReducers({
  createAuditoria: createAuditoriaSlice.reducer,
  editAuditoria: editAuditoriaSlice.reducer,
  deleteAuditoria: deleteAuditoriaSlice.reducer,
  auditoriaAll: auditoriaSlice.reducer,
  auditoriaAllTake: auditoriaAllTakeSlice.reducer,
  auditoriaAllCount: auditoriaAllCountSlice.reducer,
  auditoriaSearchAll: auditoriaSearchAllSlice.reducer,
  auditoriaSearchCount: auditoriaSearchCountSlice.reducer,
  auditoriaTahunAll: auditoriaTahunAllSlice.reducer,
  auditoriaTahunCount: auditoriaTahunCountSlice.reducer,
  auditoriaId: auditoriaByIdSlice.reducer,
});

export default auditoriaReducer;
