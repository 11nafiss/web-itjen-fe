import axios from 'axios'
import Cookies from 'js-cookie'
import { BASE_URL_API } from './api'
// import qs from 'qs'

const token = Cookies.get('access_token')
// const urlPejabat = window.config.apipejabat'
const urlPejabat = BASE_URL_API + 'pejabat'

const create = (nama: string, jabatan: string, pathGambar: string, eselon: number, deskripsi: string, atasanId: number) => {
  return axios.post(urlPejabat, JSON.stringify({
    nama: nama,
    jabatan: jabatan,
    pathGambar: pathGambar,
    eselon: eselon,
    deskripsi: deskripsi,
    atasanId: atasanId
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

const edit = (id: number, nama: string, jabatan: string, pathGambar: string, eselon: number, deskripsi: string, atasanId: number) => {
  return axios.put(urlPejabat + '/' + id, JSON.stringify({
    id: id,
    nama: nama,
    jabatan: jabatan,
    pathGambar: pathGambar,
    eselon: eselon,
    deskripsi: deskripsi,
    atasanId: atasanId
  }),
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(() => {
    // console.log(res.data)
    alert('Data berhasil Diubah')
  }).then(() => {
    location.reload()
  }).catch(err => {
    alert(err)
  })
}

const hapus = (id: number) => {
  return axios.delete(urlPejabat + '/' + id, {
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

const getPejabat = () => {
  return axios.get(urlPejabat, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data.sort((a, b) => {
          return a.eselon - b.eselon
      })
  })
}

const getPejabatById = (id: number) => {
  return axios.get(urlPejabat + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => {
    return res.data
  })
}

export const pejabatService = {
  create,
  edit,
  hapus,
  getPejabat,
  getPejabatById
}
