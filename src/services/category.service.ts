import axios from 'axios'
import Cookies from 'js-cookie'
import { BASE_URL_API } from './api'
// import qs from 'qs'

const token = Cookies.get('access_token')

// const urlArtikel = window.config.apiarticle'
const urlCategory = BASE_URL_API + 'category'

const getCategory = () => {
  return axios.get(urlCategory, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    return res.data
  })
}

export const categoryService = {
  getCategory
}
