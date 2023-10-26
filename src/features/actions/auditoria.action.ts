import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { AuditoriaData } from "../../models/auditoria.model";
import { auditoriaService } from "../../services/auditoria.service";

const urlAuditoria = BASE_URL_API + "auditoria";
const token = Cookies.get("access_token");

export const getAuditoriaData = createAsyncThunk<AuditoriaData[], void, { rejectValue: AxiosError }>("auditoria/fetchAllAuditoria", async (_, { rejectWithValue }) => {
  try {
    const response = await auditoriaService.getAuditoria();
    return response as AuditoriaData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});

export const getAuditoriaTake = createAsyncThunk<AuditoriaData[], void, { rejectValue: AxiosError }>("auditoria/fetchAllAuditoria", async (_, { rejectWithValue }) => {
  try {
    const take = 1;
    const skip = 0;
    const response = await auditoriaService.getAuditoriaTake(take, skip);
    return response as AuditoriaData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});

export const createAuditoria = createAsyncThunk<AuditoriaData[], any>("auditoria/createAuditoria", async ({ judul, deskripsi, pathPdf, pathImage, publishedAt, bulanItem, tahunItem, tampilDiBeranda, link }) => {
  const response = await axios.post(
    urlAuditoria,
    JSON.stringify({
      judul,
      deskripsi,
      pathPdf,
      pathImage,
      publishedAt,
      bulanItem,
      tahunItem,
      tampilDiBeranda,
      link,
    }),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data: AuditoriaData[] = await response.data;
  return data;
});

export const editAuditoria = createAsyncThunk<AuditoriaData[], any>("auditoria/editAuditoria", async ({ judul, deskripsi, pathPdf, pathImage, publishedAt, bulanItem, tahunItem, tampilDiBeranda, link }, id) => {
  const response = await axios.put(
    urlAuditoria + "/" + id,
    JSON.stringify({
      judul,
      deskripsi,
      pathPdf,
      pathImage,
      publishedAt,
      bulanItem,
      tahunItem,
      tampilDiBeranda,
      link,
    }),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data: AuditoriaData[] = await response.data;
  return data;
});

export const deleteAuditoria = createAsyncThunk<AuditoriaData[], any>("auditoria/deleteAuditoria", async (id) => {
  const response = await axios.delete(urlAuditoria + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data: AuditoriaData[] = await response.data;
  return data;
});
