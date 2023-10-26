import { ArticleData } from "../../models/article.model";
import { getArticleByCategory, getArticleAll, getArticleTopNews, getArticleSearch, getArticleTitle, getArticleNumber, getArticlePublished } from "../actions/article.action";
import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";

interface typeOfInitialState {
  dataArticle: ArticleData[];
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataArticle: [],
  dataPerPage: 6,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const articleByCategorySlice = createSlice({
  name: "articleByCategoryReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleByCategory.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleByCategory.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleByCategory.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const articleTitleSlice = createSlice({
  name: "articleTitleReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleTitle.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleTitle.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleTitle.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const articleAllSlice = createSlice({
  name: "articleAllReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleAll.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const articlePublishedSlice = createSlice({
  name: "articlePublishedReducer",
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
    builder.addCase(getArticlePublished.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticlePublished.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticlePublished.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const articleSearchSlice = createSlice({
  name: "articleSearchReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleSearch.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleSearch.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleSearch.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const articleTopNewsSlice = createSlice({
  name: "articleTopNewsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleTopNews.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL TOP NEWS....");
    });

    builder.addCase(getArticleTopNews.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL TOP NEWS");
    });

    builder.addCase(getArticleTopNews.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL TOP NEWS");
        state.isSuccess = false;
      }
    });
  },
});

export const articleNumberSlice = createSlice({
  name: "articleNumberReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleNumber.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleNumber.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleNumber.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

const articleReducer = combineReducers({
  articleCategory: articleByCategorySlice.reducer,
  articleTitle: articleTitleSlice.reducer,
  articleAll: articleAllSlice.reducer,
  articlePublised: articlePublishedSlice.reducer,
  articleSearch: articleSearchSlice.reducer,
  articleNumber: articleNumberSlice.reducer,
  articleTopNews: articleTopNewsSlice.reducer,
});

export default articleReducer;
