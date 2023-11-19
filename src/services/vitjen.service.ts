import axios from 'axios'
import Cookies from 'js-cookie'
import { BASE_URL_API } from './api'
// import qs from 'qs'

const token = Cookies.get('access_token')

// const urlArtikel = window.config.apiarticle'
const urlVitjen = BASE_URL_API + 'vitjen'

const getVitjen = () => {
  return axios.get(urlVitjen, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    return res.data
  })
}

export const getVitjenById = (id: number) => {
  return axios.get(urlVitjen + '/' + id, {
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => {
    return res.data
  })
}

export const vitjenService = {
    getVitjen,
    getVitjenById
}
