import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL_API } from "./api";
// import qs from 'qs'

const token = Cookies.get("access_token");
// const urlImageGallery = window.config.apiimagegallery'
const urlImageGallery = BASE_URL_API + "imagegallery";

const create = (namaFile: string) => {
  return axios
    .post(
      urlImageGallery,
      JSON.stringify({
        namaFile: namaFile,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => {
      alert("Data Berhasil Ditambahkan");
    })
    .catch((err) => {
      alert(err);
    });
};

const edit = (id: any, namaFile: string) => {
  return axios
    .put(
      urlImageGallery + "/" + id,
      JSON.stringify({
        id: id,
        namaFile: namaFile,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => {
      alert("Data Berhasil Diubah");
    })
    .then(() => {
      location.reload();
    })
    .catch((err) => {
      alert(err);
    });
};

const hapus = (id: any) => {
  return axios
    .delete(urlImageGallery + "/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      alert("Data Berhasil dihapus");
    })
    .then(() => {
      location.reload();
    })
    .catch((err) => {
      alert(err);
    });
};

const getImageGallery = (skip, take) => {
  return axios
    .get(urlImageGallery + "/" + skip + "/" + take, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getJumlahImageGallery = () => {
  return axios
    .get(urlImageGallery + "/jumlah", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const getImageGalleryById = (id: number) => {
  return axios
    .get(urlImageGallery + "/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const imagegalleryService = {
  create,
  edit,
  hapus,
  getJumlahImageGallery,
  getImageGallery,
  getImageGalleryById,
};
