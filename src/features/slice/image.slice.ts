import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";
import { createImage, editImage, deleteImage, getImageData, getImageAllTake, getImageAllCount, getImageSearchAll, getImageSearchCount } from "../actions/image.action";
import { ImageData } from "../../models/image.model";

interface typeOfInitialState {
  dataImage: ImageData[];
  searchKeyword: string,
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataImage: [],
  searchKeyword: "",
  dataPerPage: 6,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const createImageSlice = createSlice({
  name: "createImageReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createImage.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ADD IMAGE....");
    });

    builder.addCase(createImage.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
      state.dataImage = action.payload;
      console.log("ADD IMAGE SUCCESS");
    });

    builder.addCase(createImage.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ADD IMAGE");
        state.isSuccess = false;
      }
    });
  },
});

export const editImageSlice = createSlice({
  name: "editImageReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editImage.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING EDIT IMAGE....");
    });

    builder.addCase(editImage.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
      state.dataImage = action.payload;
      console.log("EDIT IMAGE SUCCESS");
    });

    builder.addCase(editImage.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED EDIT IMAGE");
        state.isSuccess = false;
      }
    });
  },
});

export const deleteImageSlice = createSlice({
  name: "deleteImageReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteImage.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING DELETE IMAGE....");
    });

    builder.addCase(deleteImage.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
      state.dataImage = action.payload;
      console.log("DELETE IMAGE SUCCESS");
    });

    builder.addCase(deleteImage.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED DELETE IMAGE");
        state.isSuccess = false;
      }
    });
  },
});

export const imageSlice = createSlice({
  name: "Image",
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
    builder.addCase(getImageData.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getImageData.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
      state.dataImage = action.payload;
    });

    builder.addCase(getImageData.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const imageAllTakeSlice = createSlice({
  name: "imageAllTake",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImageAllTake.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = "";
    });

    builder.addCase(getImageAllTake.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
      state.dataImage = action.payload;
    });

    builder.addCase(getImageAllTake.rejected, (state, { payload }) => {
      if (payload) {
        state.isSuccess = false;
      }
    });
  },
});

export const imageAllCountSlice = createSlice({
  name: "imageAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImageAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING IMAGE....");
    });

    builder.addCase(getImageAllCount.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
      state.dataImage = action.payload;
      console.log("Filled IMAGE");
    });

    builder.addCase(getImageAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED IMAGE");
        state.isSuccess = false;
      }
    });
  },
});

export const imageSearchAllSlice = createSlice({
  name: "imageSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getImageSearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING IMAGE....");
    });

    builder.addCase(getImageSearchAll.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
      state.dataImage = action.payload;
      console.log("Filled IMAGE");
    });

    builder.addCase(getImageSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED IMAGE");
        state.isSuccess = false;
      }
    });
  },
});

export const imageSearchCountSlice = createSlice({
  name: "imageSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImageSearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING IMAGE....");
    });

    builder.addCase(getImageSearchCount.fulfilled, (state, action: PayloadAction<ImageData[]>) => {
      state.dataImage = action.payload;
      console.log("Filled IMAGE");
    });

    builder.addCase(getImageSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED IMAGE");
        state.isSuccess = false;
      }
    });
  },
});

const imageReducer = combineReducers({
  createImage: createImageSlice.reducer,
  editImage: editImageSlice.reducer,
  deleteImage: deleteImageSlice.reducer,
  imageAll: imageSlice.reducer,
  imageAllTake: imageAllTakeSlice.reducer,
  imageAllCount: imageAllCountSlice.reducer,
  imageSearchAll: imageSearchAllSlice.reducer,
  imageSearchCount: imageSearchCountSlice.reducer,
});

export default imageReducer;
