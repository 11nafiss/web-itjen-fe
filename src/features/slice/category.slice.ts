import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createCategory, editCategory, deleteCategory, getCategory, getCategoryAllTake, getCategoryAllCount, getCategorySearchAll, getCategorySearchCount } from "../actions/category.action";
import { Category } from "../../models/category.model";

interface typeOfInitialState {
  dataCategory: Category[];
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataCategory: [],
  searchKeyword: "",
  dataPerPage: 5,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const createCategorySlice = createSlice({
  name: "createCategoryReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCategory.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ADD CATEGORY....");
    });

    builder.addCase(createCategory.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.dataCategory = action.payload;
      console.log("ADD CATEGORY SUCCESS");
    });

    builder.addCase(createCategory.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ADD CATEGORY");
        state.isSuccess = false;
      }
    });
  },
});

export const editCategorySlice = createSlice({
  name: "editCategoryReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editCategory.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING EDIT CATEGORY....");
    });

    builder.addCase(editCategory.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.dataCategory = action.payload;
      console.log("EDIT CATEGORY SUCCESS");
    });

    builder.addCase(editCategory.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED EDIT CATEGORY");
        state.isSuccess = false;
      }
    });
  },
});

export const deleteCategorySlice = createSlice({
  name: "deleteCategoryReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteCategory.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING DELETE CATEGORY....");
    });

    builder.addCase(deleteCategory.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.dataCategory = action.payload;
      console.log("DELETE CATEGORY SUCCESS");
    });

    builder.addCase(deleteCategory.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED DELETE CATEGORY");
        state.isSuccess = false;
      }
    });
  },
});

export const categorySlice = createSlice({
  name: "Category",
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
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getCategory.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.dataCategory = action.payload;
    });

    builder.addCase(getCategory.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const categoryAllTakeSlice = createSlice({
  name: "categoryAllTake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryAllTake.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getCategoryAllTake.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.dataCategory = action.payload;
    });

    builder.addCase(getCategoryAllTake.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const categoryAllCountSlice = createSlice({
  name: "categoryAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING CATEGORY....");
    });

    builder.addCase(getCategoryAllCount.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.dataCategory = action.payload;
      console.log("Filled CATEGORY");
    });

    builder.addCase(getCategoryAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED CATEGORY");
        state.isSuccess = false;
      }
    });
  },
});

export const categorySearchAllSlice = createSlice({
  name: "categorySearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategorySearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING CATEGORY....");
    });

    builder.addCase(getCategorySearchAll.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.dataCategory = action.payload;
      console.log("Filled CATEGORY");
    });

    builder.addCase(getCategorySearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED CATEGORY");
        state.isSuccess = false;
      }
    });
  },
});

export const categorySearchCountSlice = createSlice({
  name: "categorySearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategorySearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING CATEGORY....");
    });

    builder.addCase(getCategorySearchCount.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.dataCategory = action.payload;
      console.log("Filled CATEGORY");
    });

    builder.addCase(getCategorySearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED CATEGORY");
        state.isSuccess = false;
      }
    });
  },
});

const categoryReducer = combineReducers({
  createCategory: createCategorySlice.reducer,
  editCategory: editCategorySlice.reducer,
  deleteCategory: deleteCategorySlice.reducer,
  categoryAll: categorySlice.reducer,
  categoryAllTake: categoryAllTakeSlice.reducer,
  categoryAllCount: categoryAllCountSlice.reducer,
  categorySearchAll: categorySearchAllSlice.reducer,
  categorySearchCount: categorySearchCountSlice.reducer,
});

export default categoryReducer;
