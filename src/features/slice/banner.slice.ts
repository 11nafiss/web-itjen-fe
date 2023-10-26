import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createBanner, editBanner, deleteBanner, getBanner } from "../actions/banner.action";
import { BannerData } from "../../models/banner.model";

interface typeOfInitialState {
  dataBanner: BannerData[];
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataBanner: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const createBannerSlice = createSlice({
  name: "createBannerReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createBanner.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ADD AUDITORIA....");
    });

    builder.addCase(createBanner.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
      console.log("ADD AUDITORIA SUCCESS");
    });

    builder.addCase(createBanner.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ADD AUDITORIA");
        state.isSuccess = false;
      }
    });
  },
});

export const editBannerSlice = createSlice({
  name: "editBannerReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editBanner.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING EDIT AUDITORIA....");
    });

    builder.addCase(editBanner.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
      console.log("EDIT AUDITORIA SUCCESS");
    });

    builder.addCase(editBanner.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED EDIT AUDITORIA");
        state.isSuccess = false;
      }
    });
  },
});

export const deleteBannerSlice = createSlice({
  name: "deleteBannerReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteBanner.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING DELETE AUDITORIA....");
    });

    builder.addCase(deleteBanner.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
      console.log("DELETE AUDITORIA SUCCESS");
    });

    builder.addCase(deleteBanner.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED DELETE AUDITORIA");
        state.isSuccess = false;
      }
    });
  },
});

export const bannerSlice = createSlice({
  name: "bannerImage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBanner.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getBanner.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
    });

    builder.addCase(getBanner.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

// export const { getCarousel } = carouselSlice.actions;

// export default carouselSlice.reducer;

const bannerReducer = combineReducers({
  bannerAll: bannerSlice.reducer,
});

export default bannerReducer;
