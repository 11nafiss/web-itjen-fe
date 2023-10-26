import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { MenuData } from "../../models/menu.model";
import { menuService } from "../../services/menu.service";

export const getMenuData = createAsyncThunk<MenuData[], void, { rejectValue: AxiosError }>("menu/fetchAllMenu", async (_, { rejectWithValue }) => {
  try {
    const response = await menuService.getMenu();
    return response as MenuData[];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});