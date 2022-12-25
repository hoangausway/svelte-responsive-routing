<script>
  import page from 'page';

  import {redirectPath} from '../routing/routes';
  import auth from '../services/auth';

  $: {
    console.log('LOGIN authed: ', $auth.authed);
    console.log('LOGIN redirectPath: ', $redirectPath);
  }

  const login = () => {
    auth.updateAuth(true)
    page.redirect($redirectPath);
  };
</script>

<p>Is authed? <span>{$auth.authed}</span></p>
<p>
  Path to redirect after login success: <span>{$redirectPath}</span>
</p>
<button on:click={login}>Login</button>

<style>
  span {
    font-size: 1rem;
    font-weight: bold;
  }
</style>
