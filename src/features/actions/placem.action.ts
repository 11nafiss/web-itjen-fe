import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { PlacemData } from "../../models/placem.model";
import { pejabatService } from "../../services/pejabat.service";

const urlPlacem = BASE_URL_API + "pejabat";
const token = Cookies.get("access_token");

export const createPlacem = createAsyncThunk<PlacemData[], any>("placem/createPlacem", async ({ nama, jabatan, pathGambar, eselon, deskripsi, atasanId }) => {
  const response = await axios.post(urlPlacem, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      nama,
      jabatan,
      pathGambar,
      eselon,
      deskripsi,
      atasanId,
    }),
  });

  const result: PlacemData[] = await response.data;
  return result;
});

export const editPlacem = createAsyncThunk<PlacemData[], any, any>("placem/editPlacem", async ({ id, nama, jabatan, pathGambar, eselon, deskripsi, atasanId }) => {
  const response = await axios.put(urlPlacem + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id: id,
      nama,
      jabatan,
      pathGambar,
      eselon,
      deskripsi,
      atasanId,
    }),
  });

  const result: PlacemData[] = await response.data;
  return result;
});

export const deletePlacem = createAsyncThunk<PlacemData[], any>("placem/deletePlacem", async (id) => {
  const response = await axios.delete(urlPlacem + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result: PlacemData[] = await response.data;
  return result;
});

export const getPlacemData = createAsyncThunk<PlacemData[], void, { rejectValue: AxiosError }>("placem/fetchAllPlacem", async (_, { rejectWithValue }) => {
  try {
    const response = await pejabatService.getPejabat();
    return response as PlacemData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});

export const getPlacemAllTake = createAsyncThunk<PlacemData[], any, { rejectValue: AxiosError }>("Placem/getPlacemAllTake", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;
  
  const response = await axios.get(urlPlacem + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: PlacemData[] = await response.data;
  return data;
});

export const getPlacemAllCount = createAsyncThunk<PlacemData[], any, { rejectValue: AxiosError }>("Placem/getPlacemAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlPlacem + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: PlacemData[] = response.data;
  return data;
});

export const getPlacemSearchAll = createAsyncThunk<PlacemData[], any, { rejectValue: AxiosError }>("Placem/getPlacemSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const PlacemSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlPlacem + PlacemSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Placem: PlacemData[] = responses.data;
  return Placem;
});

export const getPlacemSearchCount = createAsyncThunk<PlacemData[], any, { rejectValue: AxiosError }>("Placem/getPlacemSearchCount", async (params) => {
  const PlacemCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlPlacem + PlacemCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: PlacemData[] = response.data;
  return data;
});
