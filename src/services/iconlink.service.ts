import axios from 'axios'
import Cookies from 'js-cookie'
import { BASE_URL_API } from './api'
// import qs from 'qs'

const token = Cookies.get('access_token')
const urlIconLink = BASE_URL_API + 'iconlink'

const create = (link: string, image: string, deskripsi: string) => {
  return axios.post(urlIconLink, JSON.stringify({
    link, image, deskripsi
  }),
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).catch(err => {
    alert(err)
  })
}

const edit = (id: number, link: string, image: string, deskripsi: string) => {
  return axios.put(urlIconLink + '/' + id, JSON.stringify({
    id, link, image, deskripsi
  }),
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(() => {
    alert('Data berhasil diubah!')
  }).catch(err => {
    alert(err)
  })
}

const hapus = (id: number) => {
  return axios.delete(urlIconLink + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(() => {
    alert('Data Berhasil dihapus')
  }).catch(err => {
    alert(err)
  })
}

const getIconLink = ()  => {
  return axios.get(urlIconLink, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data
  })
}

const getIconLinkById = (id: number) => {
  return axios.get(urlIconLink + '/' + id, {
    headers: {
      'Content-type': 'application/json',
    }
  }).then(res => {
    return res.data
  })
}

export const iconlinkService = {
  create,
  edit,
  hapus,
  getIconLink,
  getIconLinkById
}
