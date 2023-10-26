import axios from 'axios'
import Cookies from 'js-cookie'
import { BASE_URL_API } from './api'
// import qs from 'qs'

const token = Cookies.get('access_token')
// const urlAuditoria = window.config.apiauditoria'
const urlLaporan = BASE_URL_API + 'laporan'

const create = (judul: string, deskripsi: string, pathPdf: string, pathImage: string, publishedAt: string, bulanItem: number, tahunItem: number, tampilDiBeranda: boolean) => {
  return axios.post(urlLaporan, JSON.stringify({
    judul: judul,
    deskripsi: deskripsi,
    pathPdf: pathPdf,
    pathImage: pathImage,
    publishedAt: publishedAt,
    bulanItem: bulanItem,
    tahunItem: tahunItem,
    tampilDiBeranda: tampilDiBeranda
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

const edit = (id: number, judul: string, deskripsi: string, pathPdf: string, pathImage: string, publishedAt: string, bulanItem: number, tahunItem: number, tampilDiBeranda: boolean) => {
  return axios.put(urlLaporan + '/' + id, JSON.stringify({
    laporanId: id,
    judul: judul,
    deskripsi: deskripsi,
    pathPdf: pathPdf,
    pathImage: pathImage,
    publishedAt: publishedAt,
    bulanItem: bulanItem,
    tahunItem: tahunItem,
    tampilDiBeranda: tampilDiBeranda
  }),
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(() => {
    // console.log(res.data)
    alert('Data berhasil diubah!')
  }).catch(err => {
    alert(err)
  })
}

const hapus = (id: number) => {
  return axios.delete(urlLaporan + '/' + id, {
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

const getLaporanTake = (take: any, skip: any) => {
  return axios.get(urlLaporan + '/' + take + '/' + skip, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data
  })
}

const getLaporan = () => {
  return axios.get(urlLaporan, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data
  })
}

const getLaporanById = (id: number) => {
  return axios.get(urlLaporan + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    return res.data
  })
}

export const laporanService = {
  create,
  edit,
  hapus,
  getLaporan,
  getLaporanTake,
  getLaporanById
}
