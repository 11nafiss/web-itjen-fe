import axios from 'axios'
import { BASE_URL_API } from './api'
import Cookies from 'js-cookie'

const token = Cookies.get('access_token')

const urlCarousel = BASE_URL_API + 'carousel';

export const create = (judul: string, deskripsi: string, pathGambar: string, link: string, munculkanText: boolean) => {
  return axios.post(urlCarousel, JSON.stringify({
    judul: judul,
    deskripsi: deskripsi,
    pathGambar: pathGambar,
    link: link,
    munculkanText: munculkanText
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

export const edit = (id: number, judul: string, deskripsi: string, pathGambar: string, link: string, munculkanText: boolean) => {
  return axios.put(urlCarousel + '/' + id, JSON.stringify({
    carouselId: id,
    judul: judul,
    deskripsi: deskripsi,
    pathGambar: pathGambar,
    link: link,
    munculkanText: munculkanText
  }),
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(() => {
    // console.log(res.data)
    alert('Data berhasil Diubah')
  }).catch(err => {
    alert(err)
  })
}

export const hapus = (id: number) => {
  return axios.delete(urlCarousel + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(() => {
    alert('Data Berhasil dihapus')
  }).then(() => {
    location.reload()
  }).catch(err => {
    alert(err)
  })
}

export const getAllCarousel = () => {
  return axios.get(urlCarousel, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data
  })
}

export const getCarouselById = (id: number) => {
  return axios.get(urlCarousel + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => {
    return res.data
  })
}


export const carouselService = {
  create,
  edit,
  hapus,
  getAllCarousel,
  getCarouselById
}