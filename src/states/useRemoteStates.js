import { useMutation } from '@sveltestack/svelte-query'
import auth from '../services/auth'
import axiosPublic from '../services/axiosPublic'
import axiosAuth from '../services/axiosAuth'

// const urlSignup = '/auth/signup'
const urlLogin = '/auth/login'
const urlRefreshToken = '/auth/refresh-token'
const urlOrdersReport = '/order/pending-orders' //'/order/orders/1668087000000/1668432600000'
// tsFrom=1668087000*1000, tsTo=1668432600*1000

auth.subscribe(authObj => {
  console.log('authObj', authObj)
  const { accessToken, refreshToken } = authObj
  axiosAuth['intercept']({ accessToken, refreshToken, urlRefreshToken })
})

/*
  To call: 
  const mutation = useLogin()
  $mutation.mutateAsync(credentials)
*/
export const useLogin = () => {
  const fn = creds => axiosPublic.post(urlLogin, creds)
  const onSuccess = ({ data }) => auth.authenticate(data)

  return useMutation(fn, { onSuccess, onError: console.error })
}

export const useOrderPending = (locationId) => {
  axiosAuth.get(`${urlOrdersReport}/${locationId}`)
    .then(res => console.log(res.data))
    .catch(console.log)
}

