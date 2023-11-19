import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { FeatureData } from "../../models/feature.model";
import { iconlinkService } from "../../services/iconlink.service";

const urlFeature = BASE_URL_API + "iconlink";
const token = Cookies.get("access_token");

export const createFeature = createAsyncThunk<FeatureData[], any>("feature/createFeature", async (tableConfig) => {
  const response = await axios.post(urlFeature, tableConfig, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: FeatureData[] = await response.data;
  return result;
});

export const editFeature = createAsyncThunk<FeatureData[], any, any>("feature/editFeature", async (params) => {
  const response = await axios.put(urlFeature + "/" + params.id, params.tableConfig, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: FeatureData[] = await response.data;
  return result;
});

export const deleteFeature = createAsyncThunk<FeatureData[], any>("feature/deleteFeature", async (id) => {
  const response = await axios.delete(urlFeature + "/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: FeatureData[] = await response.data;
  return result;
});

export const getFeatureData = createAsyncThunk<FeatureData[], void, { rejectValue: AxiosError }>("feature/fetchAllFeature", async (_, { rejectWithValue }) => {
  const response = await axios.get(urlFeature, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: FeatureData[] = await response.data;
  return data;
});

export const getFeatureAllTake = createAsyncThunk<FeatureData[], any, { rejectValue: AxiosError }>("Feature/getFeatureAllTake", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;
  
  const response = await axios.get(urlFeature + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: FeatureData[] = await response.data;
  return data;
});

export const getFeatureAllCount = createAsyncThunk<FeatureData[], any, { rejectValue: AxiosError }>("Feature/getFeatureAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlFeature + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: FeatureData[] = response.data;
  return data;
});

export const getFeatureSearchAll = createAsyncThunk<FeatureData[], any, { rejectValue: AxiosError }>("Feature/getFeatureSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const FeatureSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlFeature + FeatureSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Feature: FeatureData[] = responses.data;
  return Feature;
});

export const getFeatureSearchCount = createAsyncThunk<FeatureData[], any, { rejectValue: AxiosError }>("Feature/getFeatureSearchCount", async (params) => {
  const FeatureCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlFeature + FeatureCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: FeatureData[] = response.data;
  return data;
});
