import jwtDecode from 'jwt-decode'
import { get, writable } from 'svelte/store'

const initStore = { authed: false }

const auth = function createAuth() {
  const { subscribe, set, update } = writable(initStore)
  return {
    subscribe,
    updateAuth: ({ accessToken, refreshToken }) => {
      const { exp, name, email, location, role } = jwtDecode(accessToken)
      update(store => (
        {
          ...store,
          authed: true,
          exp,
          name,
          email,
          location,
          role,
          accessToken,
          refreshToken
        }
      ))
    },
    reset: () => set(initStore),
    getAuth: () => get(auth)
  }
}()

export default auth
