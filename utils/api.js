import axios from "axios"
import fetch from 'isomorphic-unfetch'
export const getJewelleryList = () => {
  return fetch(process.env.NEXT_PUBLIC_API_PATH + '/api/jewellery').then(res => res)
}

export const getJewellery = (id) => {
  return fetch(process.env.NEXT_PUBLIC_API_PATH + '/api/jewellery?id=' + id).then(res => res)
}

export async function upsertJewellery(jewellery) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_PATH + '/api/jewellery', {
    method: 'post',headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jewellery)
  })
}

export async function deleteJewellery(id) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_PATH + '/api/jewellery?id=' + id, {
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