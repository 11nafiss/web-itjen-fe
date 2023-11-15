import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { UserData } from "../../models/user.model";
import { userService } from "../../services/user.service";

const urlUser = BASE_URL + "user";
const urlPengguna = BASE_URL_API + "pengguna";
const token = Cookies.get("access_token");

export const createUser = createAsyncThunk<UserData[], any>("user/createUser", async ({ username, password, email }) => {
  let url = "/register";
  const response = await axios.post(urlUser + url, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  });

  const result: UserData[] = await response.data;
  return result;
});

export const deleteUser = createAsyncThunk<UserData[], any>("user/deleteUser", async (id) => {
  const response = await axios.delete(urlPengguna + "/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: UserData[] = await response.data;
  return result;
});

export const getUserData = createAsyncThunk<UserData[], void, { rejectValue: AxiosError }>("user/fetchAllUser", async (_, { rejectWithValue }) => {
  
  
  const response = await axios.get(urlPengguna, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: UserData[] = await response.data;
  return data;
});

export const loginUser = createAsyncThunk<UserData, any, { rejectValue: AxiosError }>("user/loginUser", async (userCredentials, { rejectWithValue }) => {
  let url = "/login";

  const response = await axios.post(urlUser + url, userCredentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: UserData = response.data;
  return data;
});

export const getUserAllTake = createAsyncThunk<UserData[], any, { rejectValue: AxiosError }>("User/getUserAllTake", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;
  
  const response = await axios.get(urlPengguna + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: UserData[] = await response.data;
  return data;
});

export const getUserAllCount = createAsyncThunk<UserData[], any, { rejectValue: AxiosError }>("User/getUserAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlPengguna + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: UserData[] = response.data;
  return data;
});

export const getUserSearchAll = createAsyncThunk<UserData[], any, { rejectValue: AxiosError }>("User/getUserSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const UserSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlPengguna + UserSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const User: UserData[] = responses.data;
  return User;
});

export const getUserSearchCount = createAsyncThunk<UserData[], any, { rejectValue: AxiosError }>("User/getUserSearchCount", async (params) => {
  const UserCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlPengguna + UserCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: UserData[] = response.data;
  return data;
});
