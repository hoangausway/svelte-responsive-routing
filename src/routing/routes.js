import { writable } from 'svelte/store'

import Login from '../components/Login.svelte'
import Home from '../components/Home.svelte'
import About from '../components/About.svelte'
import Lorem from '../components/Lorem.svelte'
import NotFound from '../components/NotFound.svelte'

export const authed = writable(false)
export const recentPathRequiresAuth = writable('/')

export default {
  '/': {
    component: Home,
    public: true
  },
  '/about': {
    component: About,
    left: About,
    right: Home,
    public: true
  },
  '/lorem/:repeat': {
    component: Lorem,
    left: About,
    right: Lorem,
    public: false
  },
  '/login': {
    component: Login,
    public: true
  },
  '*': {
    component: NotFound,
    public: true
  }
}

