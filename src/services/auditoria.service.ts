import axios from 'axios'
import Cookies from 'js-cookie'
import { BASE_URL_API } from './api'
// import qs from 'qs'

const token = Cookies.get('access_token')
// const urlAuditoria = window.config.apiauditoria'
const urlAuditoria = BASE_URL_API + 'auditoria'

const create = (judul: string, deskripsi: string, pathPdf: string, pathImage: string, publishedAt: string, bulanItem: number, tahunItem: number, tampilDiBeranda: boolean) => {
  return axios.post(urlAuditoria, JSON.stringify({
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
  return axios.put(urlAuditoria + '/' + id, JSON.stringify({
    auditoriaId: id,
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
  return axios.delete(urlAuditoria + '/' + id, {
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

const getAuditoriaTake = (take: any, skip: any) => {
  return axios.get(urlAuditoria + '/' + take + '/' + skip, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data
  })
}

const getAuditoria = () => {
  return axios.get(urlAuditoria, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data
  })
}

const getAuditoriaById = (id: number) => {
  return axios.get(urlAuditoria + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => {
    return res.data
  })
}

export const auditoriaService = {
  create,
  edit,
  hapus,
  getAuditoria,
  getAuditoriaTake,
  getAuditoriaById
}
