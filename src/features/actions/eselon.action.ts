import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { EselonData } from "../../models/eselon.model";
import { eselon1Service } from "../../services/eselon1.service";

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