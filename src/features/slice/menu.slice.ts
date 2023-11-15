import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createMenu, editMenu, deleteMenu, getMenuData, getMenuSearchCount, getMenuSearchAll, getMenuAllCount, getMenuAllTake } from "../actions/menu.action";
import { MenuData } from "../../models/menu.model";

interface typeOfInitialState {
  dataMenu: MenuData[];
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataMenu: [],
  searchKeyword: "",
  dataPerPage: 5,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

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
    builder.addCase(getMenuData.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getMenuData.fulfilled, (state, action: PayloadAction<MenuData[]>) => {
      state.dataMenu = action.payload;
    });

    builder.addCase(getMenuData.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const menuAllTakeSlice = createSlice({
  name: "menuAllTake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuAllTake.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getMenuAllTake.fulfilled, (state, action: PayloadAction<MenuData[]>) => {
      state.dataMenu = action.payload;
    });

    builder.addCase(getMenuAllTake.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const menuAllCountSlice = createSlice({
  name: "menuAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING MENU....");
    });

    builder.addCase(getMenuAllCount.fulfilled, (state, action: PayloadAction<MenuData[]>) => {
      state.dataMenu = action.payload;
      console.log("Filled MENU");
    });

    builder.addCase(getMenuAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED MENU");
        state.isSuccess = false;
      }
    });
  },
});

export const menuSearchAllSlice = createSlice({
  name: "menuSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMenuSearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING MENU....");
    });

    builder.addCase(getMenuSearchAll.fulfilled, (state, action: PayloadAction<MenuData[]>) => {
      state.dataMenu = action.payload;
      console.log("Filled MENU");
    });

    builder.addCase(getMenuSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED MENU");
        state.isSuccess = false;
      }
    });
  },
});

export const menuSearchCountSlice = createSlice({
  name: "menuSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuSearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING MENU....");
    });

    builder.addCase(getMenuSearchCount.fulfilled, (state, action: PayloadAction<MenuData[]>) => {
      state.dataMenu = action.payload;
      console.log("Filled MENU");
    });

    builder.addCase(getMenuSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED MENU");
        state.isSuccess = false;
      }
    });
  },
});

const menuReducer = combineReducers({
  createMenu: createMenuSlice.reducer,
  editMenu: editMenuSlice.reducer,
  deleteMenu: deleteMenuSlice.reducer,
  menuAll: menuSlice.reducer,
  menuAllTake: menuAllTakeSlice.reducer,
  menuAllCount: menuAllCountSlice.reducer,
  menuSearchAll: menuSearchAllSlice.reducer,
  menuSearchCount: menuSearchCountSlice.reducer,
});

export default menuReducer;
