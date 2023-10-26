import axios from "axios";
// import VueJwtDecode from 'vue-jwt-decode'
import { BASE_URL_API } from "./api";
import Cookies from "js-cookie";
// import qs from 'qs'

const token = Cookies.get("access_token");
let namaUser = "";
// if (token) {
//   namaUser = VueJwtDecode.decode(token).sub
// }

// const urlArtikel = window.config.apiarticle'
const urlArtikel = BASE_URL_API + "article";

const create = (
  title: string,
  content: string,
  featuredImage: string,
  attachment: any,
  authorName: string,
  categoryId: number,
  published: boolean,
  tampilDiBeranda: boolean,
  pending: boolean,
  caption: any,
  publishedAt: string,
  thumbnail: any
) => {
  return axios
    .post(
      urlArtikel,
      JSON.stringify({
        title,
        content,
        featuredImage,
        attachment,
        authorName,
        categoryId,
        published,
        tampilDiBeranda,
        pending,
        caption,
        publishedAt,
        thumbnail,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => {
      alert("Data Berhasil Dibuat!");
      // location.reload()
    })
    .catch((err) => {
      alert(err);
    });
};

const hapus = (id: number) => {
  return axios
    .delete(urlArtikel + "/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      alert("Data Berhasil dihapus");
      location.reload();
    })
    .catch((err) => {
      alert(err);
    });
};

const edit = (
  id: number,
  title: string,
  content: string,
  featuredImage: string,
  attachment: any,
  authorName: string,
  categoryId: number,
  published: boolean,
  tampilDiBeranda: boolean,
  pending: boolean,
  caption: any,
  publishedAt: string,
  thumbnail: any
) => {
  return axios
    .put(
      urlArtikel + "/" + id,
      JSON.stringify({
        id: id,
        title: title,
        content: content,
        featuredImage: featuredImage,
        attachment: attachment,
        authorName: authorName,
        categoryId: categoryId,
        publishedAt: publishedAt,
        published: published,
        tampilDiBeranda: tampilDiBeranda,
        pending: pending,
        caption: caption,
        thumbnail: thumbnail,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => {
      // console.log(res.data)
      alert("Data berhasil diubah");
      // location.reload()
    })
    .catch((err) => {
      alert(err);
    });
};

const getArtikel = () => {
  return axios
    .get(urlArtikel, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getArtikelDashboard = () => {
  return axios
    .get(urlArtikel + "/dashboard", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getArtikelIni = (newsid: string) => {
  return axios
    .get(urlArtikel + "/news/" + newsid, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getArtikelById = (id: number) => {
  return axios
    .get(urlArtikel + "/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getArtikelPublished = (skip: any, take: any) => {
  return axios
    .get(urlArtikel + "/publish/published/" + skip + "/" + take, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getArtikelUnpublished = () => {
  return axios
    .get(urlArtikel + "/publish/unpublished", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getArtikelPending = (skip: any, take: any) => {
  return axios
    .get(urlArtikel + "/publish/pending/" + skip + "/" + take, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getArtikelMyArticle = (skip: any, take: any) => {
  return axios
    .get(urlArtikel + "/author/" + namaUser + "/" + skip + "/" + take, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getArtikelCategory = (category: any) => {
  return axios
    .get(urlArtikel + "/category/" + category, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data.filter((artikel: any) => {
        return artikel.published === true;
      });
    });
};

const getArtikelTake2 = () => {
  return axios
    .get(urlArtikel + "/taketwo", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data.filter((artikel: any) => {
        return artikel.published === true;
      });
    });
};

const getArtikelTake3 = () => {
  return axios
    .get(urlArtikel + "/takethree", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data.filter((artikel: any) => {
        return artikel.published === true;
      });
    });
};

const getArtikelTake4 = () => {
  return axios
    .get(urlArtikel + "/takefour", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data.filter((artikel: any) => {
        return artikel.published === true;
      });
    });
};

const getArtikelTake5 = () => {
  return axios
    .get(urlArtikel + "/takefive", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data.filter((artikel: any) => {
        return artikel.published === true;
      });
    });
};

const getArtikelFeed = (take: any, skip: any, category: any) => {
  return axios
    .get(urlArtikel + "/feed/" + category + "/" + take + "/" + skip, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data.filter((artikel: any) => {
        return artikel.published === true;
      });
    });
};

const getArtikelSearch = (take: any, skip: any, parameter: any) => {
  return axios
    .get(urlArtikel + "/search/" + parameter + "/" + take + "/" + skip, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data.filter((artikel: any) => {
        return artikel.published === true;
      });
    });
};

const getArtikelTopNews = () => {
  return axios
    .get(urlArtikel + "/topnews", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getJumlahArtikel = (category: any) => {
  return axios
    .get(urlArtikel + "/jumlah/" + category, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getJumlahArtikelSearch = (parameter: any) => {
  return axios
    .get(urlArtikel + "/jumlahsearch/" + parameter, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getJumlahArtikelPublish = (published: any) => {
  return axios
    .get(urlArtikel + "/jumlah/publish/" + published, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

const getJumlahArtikelAuthor = (author: string) => {
  return axios
    .get(urlArtikel + "/jumlah/author/" + author, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const artikelService = {
  create,
  edit,
  hapus,
  getArtikel,
  getArtikelSearch,
  getArtikelIni,
  getArtikelById,
  getArtikelPublished,
  getArtikelUnpublished,
  getArtikelPending,
  getArtikelMyArticle,
  getArtikelCategory,
  getArtikelTake2,
  getArtikelTake3,
  getArtikelTake4,
  getArtikelDashboard,
  getJumlahArtikel,
  getJumlahArtikelSearch,
  getJumlahArtikelAuthor,
  getJumlahArtikelPublish,
  getArtikelFeed,
  getArtikelTopNews,
};
