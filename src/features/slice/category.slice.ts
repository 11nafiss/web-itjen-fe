import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { createCategory, editCategory, deleteCategory, getCategory } from '../actions/category.action'
import { Category } from '../../models/category.model'

interface typeOfInitialState {
    dataCategory: Category[],
    isLoading: boolean,
    isSuccess: boolean,
    errorMessage: string
  }
  
  const initialState: typeOfInitialState = {
    dataCategory: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
  }

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
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getCategory.pending, (state) => {
        state.isLoading = true
        state.errorMessage = ''
      })
  
      builder.addCase(getCategory.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.dataCategory = action.payload
      })
  
      builder.addCase(getCategory.rejected, (state, { payload }) => {
        if(payload){
          state.isSuccess = false;
        }
      })
    },
  })


  const categoryReducer = combineReducers({
    categoryAll: categorySlice.reducer,
  });
  
  export default categoryReducer