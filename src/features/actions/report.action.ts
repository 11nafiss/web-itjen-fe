import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { ReportData } from "../../models/report.models";
import { laporanService } from "../../services/laporan.service";

const urlReport = BASE_URL_API + "laporan";
const token = Cookies.get("access_token");


export const createReport = createAsyncThunk<ReportData[], any>("report/createReport", async ({ judul, deskripsi, pathPdf, pathImage, publishedAt, bulanItem, tahunItem, tampilDiBeranda, link, jenis }) => {
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
        jenis
      })
      ,
    }
  );

  const result: ReportData[] = await response.data;
  return result;
});

export const editReport = createAsyncThunk<ReportData[], any, any>("report/editReport", async ({ id, judul, deskripsi, pathPdf, pathImage, publishedAt, bulanItem, tahunItem, tampilDiBeranda, link, jenis }) => {
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
        jenis
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

export const getReportAllTake = createAsyncThunk<ReportData[], any, { rejectValue: AxiosError }>("Report/getReportAllTake", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;
  
  const response = await axios.get(urlReport + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ReportData[] = await response.data;
  return data;
});

export const getReportAllCount = createAsyncThunk<ReportData[], any, { rejectValue: AxiosError }>("Report/getReportAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlReport + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ReportData[] = response.data;
  return data;
});

export const getReportSearchAll = createAsyncThunk<ReportData[], any, { rejectValue: AxiosError }>("Report/getReportSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const ReportSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlReport + ReportSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Report: ReportData[] = responses.data;
  return Report;
});

export const getReportSearchCount = createAsyncThunk<ReportData[], any, { rejectValue: AxiosError }>("Report/getReportSearchCount", async (params) => {
  const ReportCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlReport + ReportCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: ReportData[] = response.data;
  return data;
});
