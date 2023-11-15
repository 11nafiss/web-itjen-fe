import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Category } from "../../models/category.model";
import { categoryService } from "../../services/category.service";

const urlCategory = BASE_URL_API + "category";
const token = Cookies.get("access_token");

export const createCategory = createAsyncThunk<Category[], any>("category/createCategory", async ({ categoryName }) => {
  const response = await axios.post(urlCategory, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      categoryName,
    }),
  });

  const result: Category[] = await response.data;
  return result;
});

export const editCategory = createAsyncThunk<Category[], any, any>("category/editCategory", async ({ id, categoryName }) => {
  const response = await axios.put(urlCategory + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      CategoryId: id,
      categoryName,
    }),
  });

  const result: Category[] = await response.data;
  return result;
});

export const deleteCategory = createAsyncThunk<Category[], any>("category/deleteCategory", async (id) => {
  const response = await axios.delete(urlCategory + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result: Category[] = await response.data;
  return result;
});

export const getCategory = createAsyncThunk<Category[], void, { rejectValue: AxiosError }>("category/fetchAllCategory", async (_, { rejectWithValue }) => {
  try {
    const response = await categoryService.getCategory();
    return response as Category[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});

export const getCategoryAllTake = createAsyncThunk<Category[], any, { rejectValue: AxiosError }>("Category/getCategoryAllTake", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;
  
  const response = await axios.get(urlCategory + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: Category[] = await response.data;
  return data;
});

export const getCategoryAllCount = createAsyncThunk<Category[], any, { rejectValue: AxiosError }>("Category/getCategoryAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlCategory + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: Category[] = response.data;
  return data;
});

export const getCategorySearchAll = createAsyncThunk<Category[], any, { rejectValue: AxiosError }>("Category/getCategorySearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const CategorySearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlCategory + CategorySearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Category: Category[] = responses.data;
  return Category;
});

export const getCategorySearchCount = createAsyncThunk<Category[], any, { rejectValue: AxiosError }>("Category/getCategorySearchCount", async (params) => {
  const CategoryCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlCategory + CategoryCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: Category[] = response.data;
  return data;
});