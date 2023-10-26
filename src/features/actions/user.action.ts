import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BASE_URL_API } from "../../services/api";
import { UserData } from "../../models/user.model";
import { userService } from "../../services/user.service";

const urlUser = BASE_URL_API + "account";

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


export const loginUser = createAsyncThunk<UserData[], any, { rejectValue: AxiosError }>("user/loginUser", async (userCredentials, { rejectWithValue }) => {
  let url = "/signin";

  const response = await axios.post(urlUser + url, userCredentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: UserData[] = await response.data;
  return data;
});