import axios from 'axios'
const BASE_URL = import.meta.env.VITE_APP_API_URL
console.log('BASE_URL', BASE_URL)

// const BASE_URL = 'https://cncserver-fayj4.ondigitalocean.app'

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', 'crossDomain': true },
    crossDomain: true
})
