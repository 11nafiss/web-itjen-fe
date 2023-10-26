import axios from 'axios'
import Cookies from 'js-cookie'
import { BASE_URL_API } from './api'

const urlUpload = BASE_URL_API + 'upload'

const postImages = (formData) => {
  return axios.post(urlUpload + '/images', formData,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
    // router.push('/dashboard')
    location.reload()
  }).catch(err => {alert(err)})
}

const postImagesArtikelThumb = () => {

}

const postImagesArtikel = () => {

}

const postVideosArtikel = () => {

}

const postFilesArtikel = () => {

}

const postPDF = () => {

}

const deleteImagesArtikel = () => {

}

const deleteImagesArtikelThumb = () => {

}

const deleteVideosArtikel = () => {

}

const deletePDF = () => {

}

export const uploadService = {

}
