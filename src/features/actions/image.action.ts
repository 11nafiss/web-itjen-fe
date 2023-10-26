import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ImageData } from "../../models/image.model";
import { imagegalleryService } from "../../services/imagegallery.service";

export const getImageData = createAsyncThunk<ImageData[], void, { rejectValue: AxiosError }>("image/fetchAllImage", async (_, { rejectWithValue }) => {
  try {
    const response = await imagegalleryService.getJumlahImageGallery();
    return response as ImageData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});