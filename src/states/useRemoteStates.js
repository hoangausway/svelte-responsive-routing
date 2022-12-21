import { useMutation } from '@sveltestack/svelte-query'
import Axios from '../services/Axios'
import { auth } from '../services/auth'

const urlLogin = '/auth/login'
// const urlSignup = '/auth/signup'
// const urlRefreshToken = '/auth/refresh-token'

/*
  To call: 
  const mutation = useLogin()
  $mutation.mutateAsync(credentials)
*/
export const useLogin = () => {
  const fn = creds => Axios.post(urlLogin, creds)
  const onSuccess = ({ data }) => auth.authenticate(data)

  return useMutation(fn, { onSuccess, onError: console.error })
}