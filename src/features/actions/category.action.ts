import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { Category } from "../../models/category.model";
import { categoryService } from "../../services/category.service";

const urlCategory = BASE_URL_API + "category";

export const createCategory = createAsyncThunk<Category[], any>("category/createCategory", async (tableConfig) => {
  const response = await axios.post(urlCategory, tableConfig, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: Category[] = await response.data;
  return result;
});

export const editCategory = createAsyncThunk<Category[], any, any>("category/editCategory", async (params) => {
  const response = await axios.put(urlCategory + "/" + params.id, params.tableConfig, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: Category[] = await response.data;
  return result;
});

export const deleteCategory = createAsyncThunk<Category[], any>("category/deleteCategory", async (id) => {
  const response = await axios.delete(urlCategory + "/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: Category[] = await response.data;
  return result;
});

export const getCategory = createAsyncThunk<Category[], void, { rejectValue: AxiosError }>("category/fetchAllCategory", async (_, { rejectWithValue }) => {
  const response = await axios.get(urlCategory, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: Category[] = await response.data;
  return data;
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
