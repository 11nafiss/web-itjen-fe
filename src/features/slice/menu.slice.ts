import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { createMenu, editMenu, deleteMenu, getMenuData } from '../actions/menu.action'
import { MenuData } from '../../models/menu.model'

interface typeOfInitialState {
    dataMenu: MenuData[],
    isLoading: boolean,
    isSuccess: boolean,
    errorMessage: string
  }
  
  const initialState: typeOfInitialState = {
    dataMenu: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
  }

  export const createMenuSlice = createSlice({
    name: "createMenuReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(createMenu.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING ADD MENU....");
      });
  
      builder.addCase(createMenu.fulfilled, (state, action: PayloadAction<MenuData[]>) => {
        state.dataMenu = action.payload;
        console.log("ADD MENU SUCCESS");
      });
  
      builder.addCase(createMenu.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED ADD MENU");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const editMenuSlice = createSlice({
    name: "editMenuReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(editMenu.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING EDIT MENU....");
      });
  
      builder.addCase(editMenu.fulfilled, (state, action: PayloadAction<MenuData[]>) => {
        state.dataMenu = action.payload;
        console.log("EDIT MENU SUCCESS");
      });
  
      builder.addCase(editMenu.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED EDIT MENU");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const deleteMenuSlice = createSlice({
    name: "deleteMenuReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(deleteMenu.pending, (state) => {
        (state.isLoading = true), (state.errorMessage = "");
        console.log("PENDING DELETE MENU....");
      });
  
      builder.addCase(deleteMenu.fulfilled, (state, action: PayloadAction<MenuData[]>) => {
        state.dataMenu = action.payload;
        console.log("DELETE MENU SUCCESS");
      });
  
      builder.addCase(deleteMenu.rejected, (state, { payload }) => {
        if (payload) {
          console.log("FAILED DELETE MENU");
          state.isSuccess = false;
        }
      });
    },
  });
  
  export const menuSlice = createSlice({
    name: "Menu",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getMenuData.pending, (state) => {
        state.isLoading = true
        state.errorMessage = ''
      })
  
      builder.addCase(getMenuData.fulfilled, (state, action: PayloadAction<MenuData[]>) => {
        state.dataMenu = action.payload
      })
  
      builder.addCase(getMenuData.rejected, (state, { payload }) => {
        if(payload){
          state.isSuccess = false;
        }
      })
    },
  })
  

  const menuReducer = combineReducers({
    menuAll: menuSlice.reducer,
  });
  
  export default menuReducer