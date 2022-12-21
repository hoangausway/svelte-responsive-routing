<script>
  import page from 'page';

  import {redirectPath} from '../routing/routes';
  import {auth} from '../services/auth';
  import {useLogin} from '../states/useRemoteStates';

  $: {
    console.log('LOGIN authed: ', $auth.authed);
    console.log('LOGIN redirectPath: ', $redirectPath);
  }

  // credentials
  const email = 'abc2@gmail.com';
  const password = 'Hoang123';
  const location = 'PR01';

  // Mutations
  const mutation = useLogin();

  function login() {
    $mutation
      .mutateAsync({email, password, location})
      .then(() => page.redirect($redirectPath));
  }
</script>

<p>Is authed? <span>{$auth.authed}</span></p>
<p>
  Path to redirect after login success: <span>{$redirectPath}</span>
</p>
{#if $mutation.isLoading}
  <p>Login...</p>
{:else if $mutation.isError}
  <div>An error occurred: {$mutation.error.message}</div>
{/if}

<button on:click={login}>Login</button>

<style>
  span {
    font-size: 1rem;
    font-weight: bold;
  }
</style>
