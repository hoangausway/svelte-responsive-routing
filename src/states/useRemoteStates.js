import auth from '../services/auth'
import axiosPublic from '../services/axiosPublic'
import axiosAuth from '../services/axiosAuth'

const urlSignup = '/auth/signup'
const urlLogin = '/auth/login'
const urlRefreshToken = '/auth/refresh-token'

// an example of authed query
const urlOrdersReport = '/order/pending-orders'

auth.subscribe(authObj => {
  console.log('authObj', authObj)
  const { accessToken, refreshToken } = authObj
  axiosAuth['intercept']({ accessToken, refreshToken, urlRefreshToken })
})

/*
  credentials may be {email, passord, locationId}
  send request using axiosPublic
*/
export const useLogin = (creds) => {
  return axiosPublic.post(urlLogin, creds)
    .then(res => auth.updateAuth(res.data))
    .catch(console.log)
}

// { name, email, password, location, role }
export const useSignup = (creds) => {
  return axiosPublic.post(urlSignup, creds)
    .then(res => console.log('SIGNUP SUCCESS', res.data))
    .catch(console.log)
}

/*
  send request using axiosAuth
  expected there are accessToken and refreshToken, 
  the accessToken may be expired
  interceptors: 
  - request interceptor for adding accessToken in authorization header
  - response interceptor for calling refresh token in case accessToken expires
*/
export const useOrderPending = (locationId) => {
  axiosAuth.get(`${urlOrdersReport}/${locationId}`)
    .then(res => console.log(res.data))
    .catch(console.log)
}

