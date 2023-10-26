import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { FeatureData } from "../../models/feature.model";
import { iconlinkService } from "../../services/iconlink.service";

export const getFeatureData = createAsyncThunk<FeatureData[], void, { rejectValue: AxiosError }>("feature/fetchAllFeature", async (_, { rejectWithValue }) => {
  try {
    const response = await iconlinkService.getIconLink();
    return response as FeatureData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});