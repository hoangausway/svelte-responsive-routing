<script>
  import page from 'page';
  import {authed, recentPathRequiresAuth} from '../routing/routes';
  $: {
    console.log('LOGIN authed: ', $authed);
    console.log('LOGIN recentPathRequiresAuth: ', $recentPathRequiresAuth);
  }

  function login() {
    // set authed
    $authed = true;
    // redirect to the route before authentication
    page.redirect($recentPathRequiresAuth);
  }
</script>

<p>Is authed? <span>{$authed}</span></p>
<p>
  Path to redirect after login success: <span>{$recentPathRequiresAuth}</span>
</p>
<button on:click={login}>Login</button>

<style>
  span {
    font-size: 1rem;
    font-weight: bold;
  }
</style>
