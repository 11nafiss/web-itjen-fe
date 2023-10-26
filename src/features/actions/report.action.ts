import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { ReportData } from "../../models/report.models";
import { laporanService } from "../../services/laporan.service";

const urlReport = BASE_URL_API + "laporan";
const token = Cookies.get("access_token");


export const createReport = createAsyncThunk<ReportData[], any>("report/createReport", async ({ judul, deskripsi, pathPdf, pathImage, publishedAt, bulanItem, tahunItem, tampilDiBeranda, link }) => {
  const response = await axios.post(
    urlReport,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        judul,
        deskripsi,
        pathPdf,
        pathImage,
        publishedAt,
        bulanItem,
        tahunItem,
        tampilDiBeranda,
        link,
      })
      ,
    }
  );

  const result: ReportData[] = await response.data;
  return result;
});

export const editReport = createAsyncThunk<ReportData[], any, any>("report/editReport", async ({ judul, deskripsi, pathPdf, pathImage, publishedAt, bulanItem, tahunItem, tampilDiBeranda, link }, id) => {
  const response = await axios.put(
    urlReport + "/" + id,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        laporanId: id,
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
    }
  );

  const result: ReportData[] = await response.data;
  return result;
});

export const deleteReport = createAsyncThunk<ReportData[], any>("report/deleteReport", async (id) => {
  const response = await axios.delete(urlReport + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result: ReportData[] = await response.data;
  return result;
});

export const getReportData = createAsyncThunk<ReportData[], void, { rejectValue: AxiosError }>("report/fetchAllReport", async (_, { rejectWithValue }) => {
  try {
    const response = await laporanService.getLaporan();
    return response as ReportData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});

export const getReportTake = createAsyncThunk<ReportData[], void, { rejectValue: AxiosError }>("report/fetchAllReport", async (_, { rejectWithValue }) => {
  try {
    const take = 1;
    const skip = 0;
    const response = await laporanService.getLaporanTake(take, skip);
    return response as ReportData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});
