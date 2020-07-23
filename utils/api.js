import axios from "axios"
import fetch from 'isomorphic-unfetch'
export const getJewelleryList = () => {
  return fetch('http://localhost:3000/api/jewellery').then(res => res)
}

export const getJewellery = (name) => {
  return fetch('http://localhost:3000/api/jewellery?name=' + name).then(res => res)
}

export async function upsertJewellery(jewellery) {
  const res = await fetch('http://localhost:3000/api/jewellery', {
    method: 'post',
    body: JSON.stringify(jewellery)
  })
}

export const uploadFile = async file => {
  const formData = new FormData()
  formData.append("image", file, file.name)
  return axios.post("https://us-central1-news-26417.cloudfunctions.net/uploadFile", formData).then(res => {
    return res
  })
}