import { get, writable } from 'svelte/store'

console.log('auth,js RUN')

const initStore = { authed: false }

const auth = function createAuth() {
  const { subscribe, set, update } = writable(initStore)
  return {
    subscribe,
    updateAuth: (authed) => update(store => ({ ...store, authed })),
    reset: () => set(initStore),
    getAuth: () => get(auth)
  }
}()

export default auth
