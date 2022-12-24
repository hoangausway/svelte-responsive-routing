import {writable} from 'svelte/store';

import Signup from '../components/Signup.svelte';
import Login from '../components/Login.svelte';
import Home from '../components/Home.svelte';
import About from '../components/About.svelte';
import Lorem from '../components/Lorem.svelte';
import NotFound from '../components/NotFound.svelte';

export const redirectPath = writable('/');

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
  '/signup': {
    component: Signup,
    public: true
  },
  '/login': {
    component: Login,
    public: true
  },
  '*': {
    component: NotFound,
    public: true
  }
};
