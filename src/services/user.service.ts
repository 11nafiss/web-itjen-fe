import axios from "axios";
import { BASE_URL_API } from "./api";
import qs from "qs";
import Cookies from "js-cookie";

const token = Cookies.get("access_token");

const urlApi = BASE_URL_API;

const login = (formData) => {
  return axios
    .post(urlApi + "account/signin", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
    })
    .then(() => {
      // router.push('/dashboard')
      location.reload();
    })
    .catch((err) => {
      alert(err);
    });
};

function registerbaru(usernamebaru: string, password: string) {
  return axios
    .post(
      urlApi + "account",
      qs.stringify({
        username: usernamebaru,
        password: password,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
    )
    .then(() => {
      alert("User Berhasil Ditambahkan!");
    });
}

function register(formData) {
  return axios
    .post(urlApi + "account", formData, {
      // username: username,
      // password: password,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      alert("User Berhasil Ditambahkan!");
    })
    .catch((err) => {
      alert(err);
    });
}

function getUsers() {
  return axios
    .get(urlApi + "pengguna", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
}

export const getUserById = (id: number) => {
  return axios
    .get(urlApi + "pengguna/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

function logout() {
  Cookies.remove("access_token");
  // router.push('/')
}

export const userService = {
  login,
  logout,
  register,
  registerbaru,
  getUsers,
  getUserById,
};
