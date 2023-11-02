import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { FeatureData } from "../../models/feature.model";
import { iconlinkService } from "../../services/iconlink.service";

const urlFeature = BASE_URL_API + "iconlink";
const token = Cookies.get("access_token");

export const createFeature = createAsyncThunk<FeatureData[], any>("feature/createFeature", async ({ link, image, deskripsi }) => {
  const response = await axios.post(urlFeature, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      link,
      image,
      deskripsi,
    }),
  });

  const result: FeatureData[] = await response.data;
  return result;
});

export const editFeature = createAsyncThunk<FeatureData[], any, any>("feature/editFeature", async ({ id, link, image, deskripsi }) => {
  const response = await axios.put(urlFeature + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id: id,
      link,
      image,
      deskripsi,
    }),
  });

  const result: FeatureData[] = await response.data;
  return result;
});

export const deleteFeature = createAsyncThunk<FeatureData[], any>("feature/deleteFeature", async (id) => {
  const response = await axios.delete(urlFeature + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result: FeatureData[] = await response.data;
  return result;
});

export const getFeatureData = createAsyncThunk<FeatureData[], void, { rejectValue: AxiosError }>("feature/fetchAllFeature", async (_, { rejectWithValue }) => {
  try {
    const response = await iconlinkService.getIconLink();
    return response as FeatureData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});
