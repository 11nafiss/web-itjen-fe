import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { ArticleData } from "../../models/article.model";
import { artikelService } from "../../services/artikel.service";

const urlArticle = BASE_URL_API + "article";

export const createArticle = createAsyncThunk<ArticleData, any>("article/createArticle", async (articleCredentials) => {
  const response = await axios.post(urlArticle, articleCredentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: ArticleData = await response.data;
  return result;
});

export const editArticle = createAsyncThunk<ArticleData, any, any>("article/editArticle", async (params) => {
  const response = await axios.put(urlArticle + "/" + params.id, params.articleCredentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: ArticleData = await response.data;
  return result;
});

export const deleteArticle = createAsyncThunk<ArticleData, any>("article/deleteArticle", async (id) => {
  const response = await axios.delete(urlArticle + "/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: ArticleData = await response.data;
  return result;
});

export const getArticleByCategory = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleByCategory", async (params) => {
  let url = "";
  if (params.categoryId === 2) {
    url = "/taketwo";
  } else if (params.categoryId === 3) {
    url = "/takethree";
  } else if (params.categoryId === 4) {
    url = "/takefour";
  } else if (params.categoryId === 5) {
    url = "/takefive";
  }

  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;

  const response = await axios.get(urlArticle + url + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = await response.data;
  const publishedData = data.filter((artikel) => artikel.published === true);
  return publishedData;
});

export const getArticleById = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleById", async (id, { rejectWithValue }) => {
  try {
    const response = await artikelService.getArtikelById(id);
    return response as ArticleData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});

export const getArticleAll = createAsyncThunk<ArticleData[], void, { rejectValue: AxiosError }>("article/getArticleAll", async (_, { rejectWithValue }) => {
  try {
    const response = await artikelService.getArtikel();
    return response as ArticleData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});

export const getArticleAllTake = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticlePublished", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;
  
  const response = await axios.get(urlArticle + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = await response.data;
  return data;
});

export const getArticleAllCount = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleNumber", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlArticle + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = response.data;
  return data;
});

export const getArticleSearchAll = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const articleSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlArticle + articleSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const article: ArticleData[] = responses.data;
  return article;
});

export const getArticleSearchCount = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleNumber", async (params) => {
  const articleCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlArticle + articleCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = response.data;
  return data;
});

export const getArticlePublished = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticlePublished", async (params) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/publish/${params.published}/${take}/${skip}`;
  
  const response = await axios.get(urlArticle + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = await response.data;
  return data;
});

export const getArticlePublishedCount = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticlePublished", async (params) => {
  const newUrl = `/jumlah/publish/${params.published}`;
  
  const response = await axios.get(urlArticle + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = await response.data;
  return data;
});

export const getArticleTopNews = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleTopNews", async () => {
  let url = "/topnews";

  const response = await axios.get(urlArticle + url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = await response.data;
  const publishedData = data.filter((artikel) => artikel.published === true);
  return publishedData;
});

export const getArticleTitle = createAsyncThunk<ArticleData[], string, { rejectValue: AxiosError }>("article/getArticleTitle", async (title, { rejectWithValue }) => {
  try {
    const newsid = title.split("-").join(" ");
    const response = await artikelService.getArtikelIni(newsid);
    return response as ArticleData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});

export const getArticleSearch = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const articleSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlArticle + articleSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = responses.data;
  const publishedData = data.filter((artikel) => artikel.published === true);
  return publishedData;
});


