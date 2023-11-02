import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { ArticleData } from "../../models/article.model";
import { artikelService } from "../../services/artikel.service";

const urlArticle = BASE_URL_API + "article";

export const createArticle = createAsyncThunk<ArticleData, any>(
  "article/createArticle",
  async (articleCredentials) => {
    const response = await axios.post(urlArticle, articleCredentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result: ArticleData = await response.data;
    return result;
  }
);

export const editArticle = createAsyncThunk<ArticleData[], any, any>(
  "article/editArticle",
  async ({ id, title, content, featuredImage, attachment, authorName, categoryId, published, tampilDiBeranda, pending, caption, publishedAt, thumbnail } ) => {
    const response = await axios.put(urlArticle + "/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
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
    });

    const result: ArticleData[] = await response.data;
    return result;
  }
);

export const deleteArticle = createAsyncThunk<ArticleData[], any>("article/deleteArticle", async (id) => {
  const response = await axios.delete(urlArticle + "/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: ArticleData[] = await response.data;
  return result;
});

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

export const getArticleSearch = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleSearch", async (params, thunkAPI) => {
  const take = 6;
  const skip = params.page * 6 - 6;
  const articleSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlArticle + articleSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const article: ArticleData[] = responses.data;
  const publishedData = article.filter((artikel) => artikel.published === true);
  return publishedData;
});

export const getArticleSearchAll = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleSearch", async (params, thunkAPI) => {
  const take = 6;
  const skip = params.page * 6 - 6;
  const articleSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlArticle + articleSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const article: ArticleData[] = responses.data;
  return article;
});

export const getArticleNumber = createAsyncThunk<ArticleData[], any, { rejectValue: AxiosError }>("article/getArticleNumber", async (params) => {
  const articleCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlArticle + articleCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ArticleData[] = response.data;
  return data;
});
