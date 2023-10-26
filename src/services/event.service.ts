import axios from 'axios'
import { BASE_URL_API } from './api'
import Cookies from 'js-cookie'
// import qs from 'qs'

const token = Cookies.get('access_token')
// const urlEvent = window.config.apievent'
const urlEvent = BASE_URL_API + 'event'

const create = (title: string, details: string, date: string) => {
  return axios.post(urlEvent, JSON.stringify({
    title: title,
    details: details,
    date: date
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

const edit = (id: number, title: string, details: string, date: string) => {
  return axios.put(urlEvent + '/' + id, JSON.stringify({
    id: id,
    title: title,
    details: details,
    date: date
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
  return axios.delete(urlEvent + '/' + id, {
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

const getEvent = () => {
  return axios.get(urlEvent, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.data
  })
}

const getEventById = (id: number) => {
  return axios.get(urlEvent + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    return res.data
  })
}

export const eventService = {
  create,
  edit,
  hapus,
  getEvent,
  getEventById
}
