import jwtDecode from 'jwt-decode'
import { writable } from 'svelte/store'

const initStore = { authed: false }

function createAuth() {
  const { subscribe, set, update } = writable(initStore)
  return {
    subscribe,
    authenticate: ({ accessToken, refreshToken }) => {
      const { exp, name, email, location, role } = jwtDecode(accessToken)
      console.log('jwtDecode', exp, name, email, location, role)
      update(store => ({ ...store, authed: true, exp, name, email, location, role, accessToken, refreshToken }))
    },
    reset: () => set(initStore)
  }
}

export const auth = createAuth()

// export const auth = writable({authed: false})

// export const setAuth = ({ accessToken, refreshToken }) => {
//   const { exp, name, email, location, role } = jwtDecode(accessToken)
//   console.log('jwtDecode', exp, name, email, location, role)
//   auth = { exp, name, email, location, role, accessToken, refreshToken }
// }

