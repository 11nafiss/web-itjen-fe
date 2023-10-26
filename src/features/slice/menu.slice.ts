import { PayloadAction, createSlice, combineReducers } from '@reduxjs/toolkit'
import { getMenuData } from '../actions/menu.action'
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