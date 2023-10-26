import axios from 'axios'
import { BASE_URL_API } from './api'
import Cookies from 'js-cookie'

export const eselon1Service = {
  create,
  edit,
  hapus,
  getEselon1,
  getEselon1ById
}

const token = Cookies.get('access_token')

const urlEselon1 = BASE_URL_API + 'eselon1';

function create (namaEs1: string, link: string, warna: string) {
  return axios.post(urlEselon1, JSON.stringify({
    namaEs1: namaEs1,
    link: link,
    warna: warna
  }),
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(() => {
    alert('Data Berhasil Ditambahkan')
  }).catch(err => {
    alert(err)
  })
}

function edit (id: number, namaEs1: string, link: string, warna: string) {
  return axios.put(urlEselon1 + '/' + id, JSON.stringify({
    id: id,
    namaEs1: namaEs1,
    link: link,
    warna: warna
  }),
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(() => {
    alert('Data Berhasil Diubah')
  }).then(() => {
    location.reload()
  }).catch(err => {
    alert(err)
  })
}

function hapus (id: number) {
  return axios.delete(urlEselon1 + '/' + id, {
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

function getEselon1 () {
  return axios.get(urlEselon1, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data
  })
}

function getEselon1ById (id: number) {
  return axios.get(urlEselon1 + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    return res.data
  })
}
