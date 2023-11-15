import { ArticleData } from "../../models/article.model";
import {
  createArticle,
  editArticle,
  deleteArticle,
  getArticleByCategory,
  getArticleAllTake,
  getArticleTopNews,
  getArticleSearch,
  getArticleTitle,
  getArticleSearchCount,
  getArticlePublished,
  getArticleSearchAll,
  getArticleById,
  getArticlePublishedCount,
  getArticleAllCount,
  getArticleTypeCount,
  getArticleTypeAll,
} from "../actions/article.action";
import { PayloadAction, createSlice, combineReducers } from "@reduxjs/toolkit";

interface typeOfInitialState {
  dataArticle: ArticleData[];
  currentArticle: ArticleData | null;
  searchKeyword: string;
  dataPerPage: number;
  currentPage: number;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: typeOfInitialState = {
  dataArticle: [],
  currentArticle: null,
  searchKeyword: "",
  dataPerPage: 6,
  currentPage: 1,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const createArticleSlice = createSlice({
  name: "createArticleReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createArticle.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ADD ARTIKEL....");
    });

    builder.addCase(createArticle.fulfilled, (state, action: PayloadAction<ArticleData>) => {
      state.currentArticle = action.payload;
      console.log("ADD ARTIKEL SUCCESS");
    });

    builder.addCase(createArticle.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ADD ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const editArticleSlice = createSlice({
  name: "editArticleReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editArticle.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING EDIT ARTIKEL....");
    });

    builder.addCase(editArticle.fulfilled, (state, action: PayloadAction<ArticleData>) => {
      state.currentArticle = action.payload;
      console.log("EDIT ARTIKEL SUCCESS");
    });

    builder.addCase(editArticle.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED EDIT ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const deleteArticleSlice = createSlice({
  name: "deleteArticleReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteArticle.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING DELETE ARTIKEL....");
    });

    builder.addCase(deleteArticle.fulfilled, (state, action: PayloadAction<ArticleData>) => {
      state.currentArticle = action.payload;
      console.log("DELETE ARTIKEL SUCCESS");
    });

    builder.addCase(deleteArticle.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED DELETE ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

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

export const articleAllTakeSlice = createSlice({
  name: "articleAllReducer",
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
    builder.addCase(getArticleAllTake.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleAllTake.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleAllTake.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const articleAllCountSlice = createSlice({
  name: "articleAllCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleAllCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleAllCount.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleAllCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const articleByIdSlice = createSlice({
  name: "articleByIdReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleById.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleById.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleById.rejected, (state, { payload }) => {
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
  reducers: {},
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

export const articlePublishedCountSlice = createSlice({
  name: "articlePublishedCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlePublishedCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticlePublishedCount.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticlePublishedCount.rejected, (state, { payload }) => {
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
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
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

export const articleSearchAllSlice = createSlice({
  name: "articleSearchReducer",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArticleSearchAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleSearchAll.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleSearchAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const articleSearchCountSlice = createSlice({
  name: "articleSearchCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleSearchCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleSearchCount.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleSearchCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const articleTypeAllSlice = createSlice({
  name: "articleTypeReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleTypeAll.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleTypeAll.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleTypeAll.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

export const articleTypeCountSlice = createSlice({
  name: "articleTypeCountReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleTypeCount.pending, (state) => {
      (state.isLoading = true), (state.errorMessage = "");
      console.log("PENDING ARTIKEL....");
    });

    builder.addCase(getArticleTypeCount.fulfilled, (state, action: PayloadAction<ArticleData[]>) => {
      state.dataArticle = action.payload;
      console.log("Filled ARTIKEL");
    });

    builder.addCase(getArticleTypeCount.rejected, (state, { payload }) => {
      if (payload) {
        console.log("FAILED ARTIKEL");
        state.isSuccess = false;
      }
    });
  },
});

const articleReducer = combineReducers({
  createArticle: createArticleSlice.reducer,
  editArticle: editArticleSlice.reducer,
  deleteArticle: deleteArticleSlice.reducer,
  articleCategory: articleByCategorySlice.reducer,
  articleTitle: articleTitleSlice.reducer,
  articleAllTake: articleAllTakeSlice.reducer,
  articleAllCount: articleAllCountSlice.reducer,
  articleId: articleByIdSlice.reducer,
  articlePublished: articlePublishedSlice.reducer,
  articlePublishedCount: articlePublishedCountSlice.reducer,
  articleSearch: articleSearchSlice.reducer,
  articleSearchAll: articleSearchAllSlice.reducer,
  articleSearchCount: articleSearchCountSlice.reducer,
  articleTypeAll: articleTypeAllSlice.reducer,
  articleTypeCount: articleTypeCountSlice.reducer,
  articleTopNews: articleTopNewsSlice.reducer,
});

export default articleReducer;
