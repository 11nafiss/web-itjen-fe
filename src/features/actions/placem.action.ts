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
