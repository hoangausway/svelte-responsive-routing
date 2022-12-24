import axios from 'axios'
export const BASE_URL = import.meta.env.VITE_APP_API_URL // 'https://cncserver-fayj4.ondigitalocean.app'

const axiosPublic = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', 'crossDomain': true },
    crossDomain: true
})

export default axiosPublic