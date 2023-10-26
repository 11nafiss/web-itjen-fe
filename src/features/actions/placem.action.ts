import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { PlacemData } from "../../models/placem.model";
import { pejabatService } from "../../services/pejabat.service";

export const getPlacemData = createAsyncThunk<PlacemData[], void, { rejectValue: AxiosError }>("placem/fetchAllPlacem", async (_, { rejectWithValue }) => {
  try {
    const response = await pejabatService.getPejabat();
    return response as PlacemData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});
