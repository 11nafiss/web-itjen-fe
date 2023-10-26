import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { ArticleData } from "../../models/article.model";
import { artikelService } from "../../services/artikel.service";

const urlArticle = BASE_URL_API + "article";
const token = Cookies.get("access_token");

export const getArticleByCategory = createAsyncThunk<ArticleData[], number, { rejectValue: AxiosError }>("article/getArticleByCategory", async (categoryId) => {
  let url = "";
  if (categoryId === 2) {
    url = "/taketwo";
  } else if (categoryId === 3) {
    url = "/takethree";
  } else if (categoryId === 4) {
    url = "/takefour";
  } else if (categoryId === 5) {
    url = "/takefive";
  }

  console.log(categoryId);

  const response = await axios.get(urlArticle + url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = await response.data;
  const publishedData = data.filter((artikel) => artikel.published === true);
  return publishedData;
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

export const getArticlePublished = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticlePublished", async () => {
  const response = await axios.get(urlArticle, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = await response.data;
  const publishedData = data.filter((artikel) => artikel.published === true);
  return publishedData;
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

export const getArticleSearch = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleSearch", async (page, parameter) => {
  const take = 10;
  const skip = page * 10 - 10;
  let url = "/search/" + parameter + "/" + take + "/" + skip;

  const response = await axios.get(urlArticle + url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = await response.data;
  const publishedData = data.filter((artikel) => artikel.published === true);
  return publishedData;
});

export const getArticleNumber = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleNumber", async (parameter, { rejectWithValue }) => {
  try {
    const response = await artikelService.getJumlahArtikelSearch(parameter);
    return response as ArticleData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});

export const createArticle = createAsyncThunk<ArticleData[], any>(
  "article/createArticle",
  async ({ title, content, featuredImage, attachment, authorName, categoryId, published, tampilDiBeranda, pending, caption, publishedAt, thumbnail }) => {
    const response = await axios.post(
      urlArticle,
      JSON.stringify({
        title,
        content,
        featuredImage,
        attachment,
        authorName,
        categoryId,
        published,
        tampilDiBeranda,
        pending,
        caption,
        publishedAt,
        thumbnail,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data: ArticleData[] = await response.data;
    return data;
  }
);

export const editArticle = createAsyncThunk<ArticleData[], any>(
  "article/editArticle",
  async ({ title, content, featuredImage, attachment, authorName, categoryId, published, tampilDiBeranda, pending, caption, publishedAt, thumbnail }, id) => {
    const response = await axios.put(
      urlArticle + "/" + id,
      JSON.stringify({
        title,
        content,
        featuredImage,
        attachment,
        authorName,
        categoryId,
        published,
        tampilDiBeranda,
        pending,
        caption,
        publishedAt,
        thumbnail,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data: ArticleData[] = await response.data;
    return data;
  }
);

export const deleteArticle = createAsyncThunk<ArticleData[], any>(
  "article/deleteArticle",
  async (id) => {
    const response = await axios.delete(
      urlArticle + "/" + id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data: ArticleData[] = await response.data;
    return data;
  }
);
