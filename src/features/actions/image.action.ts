import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { ImageData } from "../../models/image.model";
import { imagegalleryService } from "../../services/imagegallery.service";

const urlImage = BASE_URL_API + "imagegallery";
const token = Cookies.get("access_token");

export const createImage = createAsyncThunk<ImageData[], any>("image/createImage", async ({ namaFile }) => {
  const response = await axios.post(urlImage, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      namaFile,
    }),
  });

  const result: ImageData[] = await response.data;
  return result;
});

export const editImage = createAsyncThunk<ImageData[], any, any>("image/editImage", async ({ id, namaFile }) => {
  const response = await axios.put(urlImage + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id: id,
      namaFile,
    }),
  });

  const result: ImageData[] = await response.data;
  return result;
});

export const deleteImage = createAsyncThunk<ImageData[], any>("image/deleteImage", async (id) => {
  const response = await axios.delete(urlImage + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result: ImageData[] = await response.data;
  return result;
});

export const getImageData = createAsyncThunk<ImageData[], void, { rejectValue: AxiosError }>("image/fetchAllImage", async (_, { rejectWithValue }) => {
  const response = await axios.get(urlImage, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ImageData[] = await response.data;
  return data;
});

export const getImageAllTake = createAsyncThunk<ImageData[], any, { rejectValue: AxiosError }>("Image/getImageAllTake", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;
  
  const response = await axios.get(urlImage + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ImageData[] = await response.data;
  return data;
});

export const getImageAllCount = createAsyncThunk<ImageData[], any, { rejectValue: AxiosError }>("Image/getImageAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlImage + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ImageData[] = response.data;
  return data;
});

export const getImageSearchAll = createAsyncThunk<ImageData[], any, { rejectValue: AxiosError }>("Image/getImageSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const ImageSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlImage + ImageSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Image: ImageData[] = responses.data;
  return Image;
});

export const getImageSearchCount = createAsyncThunk<ImageData[], any, { rejectValue: AxiosError }>("Image/getImageSearchCount", async (params) => {
  const ImageCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlImage + ImageCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ImageData[] = response.data;
  return data;
});