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
  try {
    const response = await imagegalleryService.getJumlahImageGallery();
    return response as ImageData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});