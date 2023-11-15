// import Library
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { VitjenData } from "../../models/vitjen.model";

const urlVitjen = BASE_URL_API + "vitjen";

export const createVitjen = createAsyncThunk<VitjenData, any>("vitjen/createVitjen", async (articleCredentials) => {
  const response = await axios.post(urlVitjen, articleCredentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: VitjenData = await response.data;
  return result;
});

export const editVitjen = createAsyncThunk<VitjenData, any, any>("vitjen/editVitjen", async (params) => {
  const response = await axios.put(urlVitjen + "/" + params.id, params.articleCredentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: VitjenData = await response.data;
  return result;
});

export const deleteVitjen = createAsyncThunk<VitjenData, any>("vitjen/deleteVitjen", async (id) => {
  const response = await axios.delete(urlVitjen + "/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: VitjenData = await response.data;
  return result;
});

export const getVitjenAll = createAsyncThunk<VitjenData[], any, { rejectValue: AxiosError }>("vitjen/getArticlePublished", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;

  const response = await axios.get(urlVitjen + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: VitjenData[] = await response.data;
  return data;
});

export const getVitjenAllCount = createAsyncThunk<VitjenData[], any, { rejectValue: AxiosError }>("vitjen/getVitjenAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlVitjen + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: VitjenData[] = response.data;
  return data;
});

export const getVitjenById = createAsyncThunk<VitjenData[], any, { rejectValue: AxiosError }>("vitjen/getVitjenById", async (params) => {
  const newUrl = `/${params.id}`;

  const response = await axios.get(urlVitjen + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: VitjenData[] = response.data;
  return data;
});

export const getVitjenSearchAll = createAsyncThunk<VitjenData[], any, { rejectValue: AxiosError }>("Vitjen/getVitjenSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const VitjenSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlVitjen + VitjenSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Vitjen: VitjenData[] = responses.data;
  return Vitjen;
});

export const getVitjenSearchCount = createAsyncThunk<VitjenData[], any, { rejectValue: AxiosError }>("Vitjen/getVitjenSearchCount", async (params) => {
  const VitjenCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlVitjen + VitjenCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: VitjenData[] = response.data;
  return data;
});
