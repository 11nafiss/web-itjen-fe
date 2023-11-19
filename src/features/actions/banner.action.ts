import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { BannerData } from "../../models/banner.model";
import { getAllCarousel } from "../../services/carousel.service";

const urlBanner = BASE_URL_API + "carousel";

export const createBanner = createAsyncThunk<BannerData[], any>("banner/createBanner", async (tableConfig) => {
  const response = await axios.post(urlBanner, tableConfig, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: BannerData[] = await response.data;
  return result;
});

export const editBanner = createAsyncThunk<BannerData[], any, any>("banner/editBanner", async (params) => {
  const response = await axios.put(urlBanner + "/" + params.id, params.tableConfig, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: BannerData[] = await response.data;
  return result;
});

export const deleteBanner = createAsyncThunk<BannerData[], any>("banner/deleteBanner", async (id) => {
  const response = await axios.delete(urlBanner + "/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: BannerData[] = await response.data;
  return result;
});

export const getBanner = createAsyncThunk<BannerData[], void, { rejectValue: AxiosError }>("banner/fetchAllBanner", async (_, { rejectWithValue }) => {
  const response = await axios.get(urlBanner, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: BannerData[] = await response.data;
  return data;
});

export const getBannerAllTake = createAsyncThunk<BannerData[], any, { rejectValue: AxiosError }>("Banner/getBannerAllTake", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;

  const response = await axios.get(urlBanner + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: BannerData[] = await response.data;
  return data;
});

export const getBannerAllCount = createAsyncThunk<BannerData[], any, { rejectValue: AxiosError }>("Banner/getBannerAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlBanner + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: BannerData[] = response.data;
  return data;
});

export const getBannerSearchAll = createAsyncThunk<BannerData[], any, { rejectValue: AxiosError }>("Banner/getBannerSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const BannerSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlBanner + BannerSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Banner: BannerData[] = responses.data;
  return Banner;
});

export const getBannerSearchCount = createAsyncThunk<BannerData[], any, { rejectValue: AxiosError }>("Banner/getBannerSearchCount", async (params) => {
  const BannerCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlBanner + BannerCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: BannerData[] = response.data;
  return data;
});
