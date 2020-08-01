import axios from "axios"
import fetch from 'isomorphic-unfetch'
export const getJewelleryList = () => {
  return fetch('/api/jewellery').then(res => res)
}

export const getJewellery = (_id) => {
  return fetch('/api/jewellery?_id=' + _id).then(res => res)
}

export async function upsertJewellery(jewellery) {
  const res = await fetch('/api/jewellery', {
    method: 'post',
    body: JSON.stringify(jewellery)
  })
}

export async function deleteJewellery(_id) {
  const res = await fetch('/api/jewellery?_id=' + _id, {
    method: 'delete'
  })
}

export const uploadFile = async file => {
  const formData = new FormData()
  formData.append("image", file, file.name)
  return axios.post("https://us-central1-news-26417.cloudfunctions.net/uploadFile", formData).then(res => {
    return res
  })
}