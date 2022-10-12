import axios from 'axios'
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {'x-token': localStorage.getItem('token') || ''},
})
