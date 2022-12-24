import axios from 'axios'
import axiosPublic, { BASE_URL } from './axiosPublic'

// const BASE_URL = import.meta.env.VITE_APP_API_URL // 'https://cncserver-fayj4.ondigitalocean.app'

const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', 'crossDomain': true },
  withCredentials: true
})

const interceptRequest = (accsessToken) => {
  return axiosAuth.interceptors.request.use(
    config => {
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${accsessToken}`
      }
      return config
    },
    error => Promise.reject(error)
  )
}

const interceptResponse = (refreshToken, urlRefreshToken) => {
  return axiosAuth.interceptors.response.use(
    response => response,
    async (error) => {
      const prevRequest = error?.config
      if (error?.response?.status === 403 && !prevRequest?.sent) {
        prevRequest.sent = true
        const res = await axiosPublic.post(urlRefreshToken, { refreshToken })
        prevRequest.headers['Authorization'] = `Bearer ${res.data.data.accessToken}`
        return axiosAuth(prevRequest)
      }
      return Promise.reject(error)
    }
  )
}

axiosAuth['intercept'] = ({ accessToken, refreshToken, urlRefreshToken }) => {
  interceptRequest(accessToken)
  interceptResponse(refreshToken, urlRefreshToken)
}

export default axiosAuth