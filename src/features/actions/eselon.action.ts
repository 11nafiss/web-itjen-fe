import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { EselonData } from "../../models/eselon.model";
import { eselon1Service } from "../../services/eselon1.service";

const urlEselon = BASE_URL_API + "eselon1";
const token = Cookies.get("access_token");

export const createEselon = createAsyncThunk<EselonData[], any>("eselon/createEselon", async (tableConfig) => {
  const response = await axios.post(urlEselon, tableConfig, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: EselonData[] = await response.data;
  return result;
});

export const editEselon = createAsyncThunk<EselonData[], any, any>("eselon/editEselon", async (params) => {
  const response = await axios.put(urlEselon + "/" + params.id, params.tableConfig, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: EselonData[] = await response.data;
  return result;
});

export const deleteEselon = createAsyncThunk<EselonData[], any>("eselon/deleteEselon", async (id) => {
  const response = await axios.delete(urlEselon + "/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: EselonData[] = await response.data;
  return result;
});

export const getEselonData = createAsyncThunk<EselonData[], void, { rejectValue: AxiosError }>("eselon/fetchAllEselon", async (_, { rejectWithValue }) => {
  const response = await axios.get(urlEselon, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: EselonData[] = response.data;
  return data;
});

export const getEselonAllTake = createAsyncThunk<EselonData[], any, { rejectValue: AxiosError }>("Eselon/getEselonAllTake", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;

  const response = await axios.get(urlEselon + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: EselonData[] = await response.data;
  return data;
});

export const getEselonAllCount = createAsyncThunk<EselonData[], any, { rejectValue: AxiosError }>("Eselon/getEselonAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlEselon + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: EselonData[] = response.data;
  return data;
});

export const getEselonSearchAll = createAsyncThunk<EselonData[], any, { rejectValue: AxiosError }>("Eselon/getEselonSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const EselonSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlEselon + EselonSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Eselon: EselonData[] = responses.data;
  return Eselon;
});

export const getEselonSearchCount = createAsyncThunk<EselonData[], any, { rejectValue: AxiosError }>("Eselon/getEselonSearchCount", async (params) => {
  const EselonCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlEselon + EselonCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: EselonData[] = response.data;
  return data;
});
