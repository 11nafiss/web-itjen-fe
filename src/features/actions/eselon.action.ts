import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { EselonData } from "../../models/eselon.model";
import { eselon1Service } from "../../services/eselon1.service";

const urlEselon = BASE_URL_API + "eselon1";
const token = Cookies.get("access_token");

export const createEselon = createAsyncThunk<EselonData[], any>("eselon/createEselon", async ({ namaEs1, link, singkatan }) => {
  const response = await axios.post(urlEselon, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      namaEs1,
      link,
      singkatan,
    }),
  });

  const result: EselonData[] = await response.data;
  return result;
});

export const editEselon = createAsyncThunk<EselonData[], any, any>("eselon/editEselon", async ({ id, namaEs1, link, singkatan }) => {
  const response = await axios.put(urlEselon + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id: id,
      namaEs1,
      link,
      singkatan,
    }),
  });

  const result: EselonData[] = await response.data;
  return result;
});

export const deleteEselon = createAsyncThunk<EselonData[], any>("eselon/deleteEselon", async (id) => {
  const response = await axios.delete(urlEselon + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result: EselonData[] = await response.data;
  return result;
});

export const getEselonData = createAsyncThunk<EselonData[], void, { rejectValue: AxiosError }>("eselon/fetchAllEselon", async (_, { rejectWithValue }) => {
  try {
    const response = await eselon1Service.getEselon1();
    return response as EselonData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});
