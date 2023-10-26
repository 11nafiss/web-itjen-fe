import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { CarouselImageData } from "../../models/carousel.model";
import { getAllCarousel } from "../../services/carousel.service";

export const getCarouselImage = createAsyncThunk<CarouselImageData[], void, { rejectValue: AxiosError }>("carousel/fetchAllCarouselImg", async (_, { rejectWithValue }) => {
  try {
    const response = await getAllCarousel();
    return response as CarouselImageData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});
