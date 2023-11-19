import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { AuditoriaData } from "../../models/auditoria.model";
import { auditoriaService } from "../../services/auditoria.service";

const urlAuditoria = BASE_URL_API + "auditoria";

export const createAuditoria = createAsyncThunk<AuditoriaData[], any>("auditoria/createAuditoria", async (tableConfig) => {
  const response = await axios.post(urlAuditoria, tableConfig, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: AuditoriaData[] = await response.data;
  return result;
});

export const editAuditoria = createAsyncThunk<AuditoriaData[], any, any>("auditoria/editAuditoria", async (params) => {
  const response = await axios.put(urlAuditoria + "/" + params.id, params.tableConfig, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: AuditoriaData[] = await response.data;
  return result;
});

export const deleteAuditoria = createAsyncThunk<AuditoriaData[], any>("auditoria/deleteAuditoria", async (id) => {
  const response = await axios.delete(urlAuditoria + "/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: AuditoriaData[] = await response.data;
  return result;
});

export const getAuditoriaData = createAsyncThunk<AuditoriaData[], void, { rejectValue: AxiosError }>("auditoria/fetchAllAuditoria", async (_, { rejectWithValue }) => {
  const response = await axios.get(urlAuditoria, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: AuditoriaData[] = await response.data;
  return data;
});

export const getAuditoriaAllTake = createAsyncThunk<AuditoriaData[], any, { rejectValue: AxiosError }>("Auditoria/getAuditoriaAllTake", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;

  const response = await axios.get(urlAuditoria + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: AuditoriaData[] = await response.data;
  return data;
});

export const getAuditoriaAllCount = createAsyncThunk<AuditoriaData[], any, { rejectValue: AxiosError }>("Auditoria/getAuditoriaAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlAuditoria + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: AuditoriaData[] = response.data;
  return data;
});

export const getAuditoriaSearchAll = createAsyncThunk<AuditoriaData[], any, { rejectValue: AxiosError }>("Auditoria/getAuditoriaSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const AuditoriaSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlAuditoria + AuditoriaSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Auditoria: AuditoriaData[] = responses.data;
  return Auditoria;
});

export const getAuditoriaSearchCount = createAsyncThunk<AuditoriaData[], any, { rejectValue: AxiosError }>("Auditoria/getAuditoriaSearchCount", async (params) => {
  const AuditoriaCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlAuditoria + AuditoriaCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: AuditoriaData[] = response.data;
  return data;
});

export const getAuditoriaById = createAsyncThunk<AuditoriaData[], any, { rejectValue: AxiosError }>("Auditoria/getAuditoriaById", async (params) => {
  const newUrl = `/${params.id}`;

  const response = await axios.get(urlAuditoria + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: AuditoriaData[] = response.data;
  return data;
});

export const getAuditoriaTahunAll = createAsyncThunk<AuditoriaData[], any, { rejectValue: AxiosError }>("article/getAuditoriaTahun", async (params, thunkAPI) => {
  const articleTahunUrl = `/tahun/${params.tahun}`;

  const responses = await axios.get(urlAuditoria + articleTahunUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const article: AuditoriaData[] = responses.data;
  return article;
});

export const getAuditoriaTahunCount = createAsyncThunk<AuditoriaData[], any, { rejectValue: AxiosError }>("article/getAuditoriaNumber", async (params) => {
  const articleCountUrl = `/jumlahtahun/${params.type}`;

  const response = await axios.get(urlAuditoria + articleCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: AuditoriaData[] = response.data;
  return data;
});
