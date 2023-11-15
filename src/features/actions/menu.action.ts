import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL_API } from "../../services/api";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { MenuData } from "../../models/menu.model";
import { menuService } from "../../services/menu.service";

const urlMenu = BASE_URL_API + "menu";
const token = Cookies.get("access_token");

export const createMenu = createAsyncThunk<MenuData[], any>("menu/createMenu", async ({ menuText, menuLevel, parentId, link, hasSubMenu, isExternalLink }) => {
  const response = await axios.post(urlMenu, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      menuText,
      menuLevel,
      parentId,
      link,
      hasSubMenu,
      isExternalLink,
    }),
  });

  const result: MenuData[] = await response.data;
  return result;
});

export const editMenu = createAsyncThunk<MenuData[], any, any>("menu/editMenu", async ({ id, menuText, menuLevel, parentId, link, hasSubMenu, isExternalLink }) => {
  const response = await axios.put(urlMenu + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      menuId: id,
      menuText,
      menuLevel,
      parentId,
      link,
      hasSubMenu,
      isExternalLink,
    }),
  });

  const result: MenuData[] = await response.data;
  return result;
});

export const deleteMenu = createAsyncThunk<MenuData[], any>("menu/deleteMenu", async (id) => {
  const response = await axios.delete(urlMenu + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result: MenuData[] = await response.data;
  return result;
});

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

export const getMenuAllTake = createAsyncThunk<MenuData[], any, { rejectValue: AxiosError }>("Menu/getMenuAllTake", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const newUrl = `/${take}/${skip}`;
  
  const response = await axios.get(urlMenu + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: MenuData[] = await response.data;
  return data;
});

export const getMenuAllCount = createAsyncThunk<MenuData[], any, { rejectValue: AxiosError }>("Menu/getMenuAllCount", async (params) => {
  const newUrl = `/jumlahall`;

  const response = await axios.get(urlMenu + newUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: MenuData[] = response.data;
  return data;
});

export const getMenuSearchAll = createAsyncThunk<MenuData[], any, { rejectValue: AxiosError }>("Menu/getMenuSearch", async (params, thunkAPI) => {
  const take = params.take;
  const skip = params.page * params.take - params.take;
  const MenuSearchUrl = `/search/${params.keyword}/${take}/${skip}`;

  const responses = await axios.get(urlMenu + MenuSearchUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Menu: MenuData[] = responses.data;
  return Menu;
});

export const getMenuSearchCount = createAsyncThunk<MenuData[], any, { rejectValue: AxiosError }>("Menu/getMenuSearchCount", async (params) => {
  const MenuCountUrl = `/jumlahsearch/${params.keyword}`;

  const response = await axios.get(urlMenu + MenuCountUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: MenuData[] = response.data;
  return data;
});
