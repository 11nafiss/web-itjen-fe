import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createBanner, editBanner, deleteBanner, getBanner, getBannerAllTake, getBannerAllCount, getBannerSearchAll, getBannerSearchCount } from "../actions/banner.action";
import { BannerData } from "../../models/banner.model";

interface typeOfInitialState {
  dataBanner: BannerData[];
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataBanner: [],
  searchKeyword: "",
  dataPerPage: 6,
  currentPage: 1,
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
      console.log("PENDING ADD BANNER....");
    });

    builder.addCase(createBanner.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
      console.log("ADD Banner SUCCESS");
    });

    builder.addCase(createBanner.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ADD BANNER");
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
      console.log("PENDING EDIT BANNER....");
    });

    builder.addCase(editBanner.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
      console.log("EDIT Banner SUCCESS");
    });

    builder.addCase(editBanner.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED EDIT BANNER");
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
      console.log("PENDING DELETE BANNER....");
    });

    builder.addCase(deleteBanner.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
      console.log("DELETE Banner SUCCESS");
    });

    builder.addCase(deleteBanner.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED DELETE BANNER");
        state.isSuccess = false;
      }
    });
  },
});

export const bannerSlice = createSlice({
  name: "bannerImage",
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

export const bannerAllTakeSlice = createSlice({
  name: "bannerAllTake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBannerAllTake.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getBannerAllTake.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
    });

    builder.addCase(getBannerAllTake.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const bannerAllCountSlice = createSlice({
  name: "bannerAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBannerAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING BANNER....");
    });

    builder.addCase(getBannerAllCount.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
      console.log("Filled BANNER");
    });

    builder.addCase(getBannerAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED BANNER");
        state.isSuccess = false;
      }
    });
  },
});

export const bannerSearchAllSlice = createSlice({
  name: "bannerSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBannerSearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING BANNER....");
    });

    builder.addCase(getBannerSearchAll.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
      console.log("Filled BANNER");
    });

    builder.addCase(getBannerSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED BANNER");
        state.isSuccess = false;
      }
    });
  },
});

export const bannerSearchCountSlice = createSlice({
  name: "bannerSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBannerSearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING BANNER....");
    });

    builder.addCase(getBannerSearchCount.fulfilled, (state, action: PayloadAction<BannerData[]>) => {
      state.dataBanner = action.payload;
      console.log("Filled BANNER");
    });

    builder.addCase(getBannerSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED BANNER");
        state.isSuccess = false;
      }
    });
  },
});

// export const { getCarousel } = carouselSlice.actions;

// export default carouselSlice.reducer;

const bannerReducer = combineReducers({
  createBanner: createBannerSlice.reducer,
  editBanner: editBannerSlice.reducer,
  deleteBanner: deleteBannerSlice.reducer,
  bannerAll: bannerSlice.reducer,
  bannerAllTake: bannerAllTakeSlice.reducer,
  bannerAllCount: bannerAllCountSlice.reducer,
  bannerSearchAll: bannerSearchAllSlice.reducer,
  bannerSearchCount: bannerSearchCountSlice.reducer,
});

export default bannerReducer;
