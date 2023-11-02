import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { BannerData } from "../../models/banner.model";
import { getAllCarousel } from "../../services/carousel.service";

const urlBanner = BASE_URL_API + "carousel";
const token = Cookies.get("access_token");

export const createBanner = createAsyncThunk<BannerData[], any>("banner/createBanner", async ({ judul, deskripsi, pathGambar, link, munculkanText }) => {
  const response = await axios.post(urlBanner, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      judul,
      deskripsi,
      pathGambar,
      link,
      munculkanText,
    }),
  });

  const result: BannerData[] = await response.data;
  return result;
});

export const editBanner = createAsyncThunk<BannerData[], any, any>("banner/editBanner", async ({ id,judul, deskripsi, pathGambar, link, munculkanText }) => {
  const response = await axios.put(urlBanner + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      carouselId: id,
      judul,
      deskripsi,
      pathGambar,
      link,
      munculkanText,
    }),
  });

  const result: BannerData[] = await response.data;
  return result;
});

export const deleteBanner = createAsyncThunk<BannerData[], any>("banner/deleteBanner", async (id) => {
  const response = await axios.delete(urlBanner + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result: BannerData[] = await response.data;
  return result;
});

export const getBanner = createAsyncThunk<BannerData[], void, { rejectValue: AxiosError }>("banner/fetchAllBanner", async (_, { rejectWithValue }) => {
  try {
    const response = await getAllCarousel();
    return response as BannerData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});
