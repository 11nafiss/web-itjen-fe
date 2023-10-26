import axios from 'axios'
import Cookies from 'js-cookie'
import { BASE_URL_API } from './api'

const token = Cookies.get('access_token')
// const urlMenu = window.config.apimenu'
const urlMenu = BASE_URL_API + 'menu'

const getMenu = () => {
  return axios.get(urlMenu, {
    headers: {
      'Content-type': 'application/json'
    }
  }).then(res => {
    return res.data
  })
}

const getMenuById = (id: number) => {
  return axios.get(urlMenu + '/' + id, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => {
    return res.data
  })
}

function create (menuText: string, menuLevel: number, parentId: number, link: string, hasSubMenu: boolean, isExternalLink: boolean) {
  return axios.post(urlMenu, JSON.stringify({
    menuText: menuText,
    menuLevel: menuLevel,
    parentId: parentId,
    link: link,
    hasSubMenu: hasSubMenu,
    isExternalLink: isExternalLink
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

function edit (id: number, menuText: string, menuLevel: number, parentId: number, link: string, hasSubMenu: boolean, isExternalLink: boolean) {
  return axios.put(urlMenu + '/' + id, JSON.stringify({
    menuId: id,
    menuText: menuText,
    menuLevel: menuLevel,
    parentId: parentId,
    link: link,
    hasSubMenu: hasSubMenu,
    isExternalLink: isExternalLink
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

const hapus = (id: number) => {
  return axios.delete(urlMenu + '/' + id, {
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

export const menuService = {
  create,
  edit,
  hapus,
  getMenu,
  getMenuById
}
