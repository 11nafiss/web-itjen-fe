import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createUser, deleteUser, getUserAllCount, getUserAllTake, getUserData, getUserSearchAll, getUserSearchCount, loginUser } from "../actions/user.action";
import { UserData } from "../../models/user.model";

interface typeOfInitialState {
  dataUser: UserData[];
  currentUser: UserData | null;
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
}

const initialState: typeOfInitialState = {
  dataUser: [],
  currentUser: null,
  searchKeyword: "",
  dataPerPage: 5,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const createUserSlice = createSlice({
  name: "createUserReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      (state.isLoading = true), (state.error = "");
      console.log("PENDING ADD USER....");
    });

    builder.addCase(createUser.fulfilled, (state, action: PayloadAction<UserData[]>) => {
      state.dataUser = action.payload;
      console.log("ADD USER SUCCESS");
    });

    builder.addCase(createUser.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ADD USER");
        state.isSuccess = false;
      }
    });
  },
});

export const deleteUserSlice = createSlice({
  name: "deleteUserReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteUser.pending, (state) => {
      (state.isLoading = true), (state.error = "");
      console.log("PENDING DELETE USER....");
    });

    builder.addCase(deleteUser.fulfilled, (state, action: PayloadAction<UserData[]>) => {
      state.dataUser = action.payload;
      console.log("DELETE USER SUCCESS");
    });

    builder.addCase(deleteUser.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED DELETE USER");
        state.isSuccess = false;
      }
    });
  },
});

export const userSlice = createSlice({
  name: "User",
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
    builder.addCase(getUserData.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(getUserData.fulfilled, (state, action: PayloadAction<UserData[]>) => {
      state.dataUser = action.payload;
    });

    builder.addCase(getUserData.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    logout: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<UserData>) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = null;
    });

    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.isSuccess = false;
        state.error = "Access Denied! Invalid Credentials";
      } else {
        state.error = null;
      }
    });
  },
});

export const userAllTakeSlice = createSlice({
  name: "userAllTake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserAllTake.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(getUserAllTake.fulfilled, (state, action: PayloadAction<UserData[]>) => {
      state.dataUser = action.payload;
    });

    builder.addCase(getUserAllTake.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const userAllCountSlice = createSlice({
  name: "userAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserAllCount.pending, (state) => {
      (state.isLoading = true), (state.error = "");
      console.log("PENDING REPORT....");
    });

    builder.addCase(getUserAllCount.fulfilled, (state, action: PayloadAction<UserData[]>) => {
      state.dataUser = action.payload;
      console.log("Filled REPORT");
    });

    builder.addCase(getUserAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED REPORT");
        state.isSuccess = false;
      }
    });
  },
});

export const userSearchAllSlice = createSlice({
  name: "userSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserSearchAll.pending, (state) => {
      (state.isLoading = true), (state.error = "");
      console.log("PENDING REPORT....");
    });

    builder.addCase(getUserSearchAll.fulfilled, (state, action: PayloadAction<UserData[]>) => {
      state.dataUser = action.payload;
      console.log("Filled REPORT");
    });

    builder.addCase(getUserSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED REPORT");
        state.isSuccess = false;
      }
    });
  },
});

export const userSearchCountSlice = createSlice({
  name: "userSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserSearchCount.pending, (state) => {
      (state.isLoading = true), (state.error = "");
      console.log("PENDING REPORT....");
    });

    builder.addCase(getUserSearchCount.fulfilled, (state, action: PayloadAction<UserData[]>) => {
      state.dataUser = action.payload;
      console.log("Filled REPORT");
    });

    builder.addCase(getUserSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED REPORT");
        state.isSuccess = false;
      }
    });
  },
});

// export default userSlice.reducer

const userReducer = combineReducers({
  userAll: userSlice.reducer,
  loginUser: loginSlice.reducer,
  createUser: createUserSlice.reducer,
  deleteUser: deleteUserSlice.reducer,
  userAllTake: userAllTakeSlice.reducer,
  userAllCount: userAllCountSlice.reducer,
  userSearchAll: userSearchAllSlice.reducer,
  userSearchCount: userSearchCountSlice.reducer,
});

export default userReducer;
