
import fetch from 'isomorphic-unfetch'
export const getJewelleryList = () => {
  return fetch('http://localhost:3000/api/jewellery').then(res => res)
}