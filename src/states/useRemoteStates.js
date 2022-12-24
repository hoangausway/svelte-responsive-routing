import { useQuery } from '@sveltestack/svelte-query'

import auth from '../services/auth'
import axiosPublic from '../services/axiosPublic'
import axiosAuth from '../services/axiosAuth'

// const urlSignup = '/auth/signup'
const urlLogin = '/auth/login'
const urlRefreshToken = '/auth/refresh-token'

// an example of authed query
const urlPendingOrdersByLocId = locId => `/order/pending-orders/${locId}`

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

/* SVELTE-QUERY */
// keys
export const qKeys = {
  order: 'order',
  pendingOrdersByLocId: locId => [...qKeys.order, 'pending-orders', locId]
}

/*
  send request using axiosAuth
  expected there are accessToken and refreshToken, 
  the accessToken may be expired
  interceptors: 
  - request interceptor for adding accessToken in authorization header
  - response interceptor for calling refresh token in case accessToken expires
  (error doe 403)
*/
export const usePendingOrdersByLocId = locId => {
  return useQuery(
    qKeys.pendingOrdersByLocId(locId),
    () => axiosAuth.get(urlPendingOrdersByLocId(locId)),
    {
      refetchInterval: 20000, // 20s
      initialData: () => [],
      onSuccess: console.log,
      onError: console.log
    })
}

