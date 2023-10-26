import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { getUserData, loginUser } from "../actions/user.action";
import { UserData } from "../../models/user.model";

interface typeOfInitialState {
  dataUser: UserData[];
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
}

const initialState: typeOfInitialState = {
  dataUser: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<UserData[]>) => {
      state.isLoading = false;
      state.dataUser = action.payload;
      state.error = null;
    });

    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.isSuccess = false;
        state.error = 'Access Denied! Invalid Credentials';
      } else {
        state.error = null;
      }
    });
  },
});

// export default userSlice.reducer

const userReducer = combineReducers({
  userAll: userSlice.reducer,
  loginUser: loginSlice.reducer,
});

export default userReducer;
