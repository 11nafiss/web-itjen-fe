import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { UserData } from "../../models/user.model";
import { userService } from "../../services/user.service";

const urlUser = BASE_URL + "user";
const token = Cookies.get("access_token");

export const createUser = createAsyncThunk<UserData[], any>("user/createUser", async ({ username, password, email }) => {
  let url = "/register";
  const response = await axios.post(urlUser + url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
  const response = await axios.delete(urlUser + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result: UserData[] = await response.data;
  return result;
});

export const getUserData = createAsyncThunk<UserData[], void, { rejectValue: AxiosError }>("user/fetchAllUser", async (_, { rejectWithValue }) => {
  try {
    const response = await userService.getUsers();
    return response as UserData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
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
