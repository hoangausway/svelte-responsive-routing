<script>
  import auth from '../services/auth';
  import {useOrderPending} from '../states/useRemoteStates';

  $: console.log('auth', auth);
  $: console.log('$auth', $auth);

  const reportsHandle = () => {
    useOrderPending('PR01');
  };
</script>

<div>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/lorem/10">Lorem 10</a></li>
    <li><a href="/lorem/22">Lorem 22</a></li>
    <li><a href="/bar">Bar</a></li>
    <li><a href="/signup">Signup</a></li>
    <li>
      {#if !$auth.authed}
        <a class="login" href="/login">Login</a>
      {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="logout" on:click|preventDefault={() => auth.reset()}>
          Logout
        </div>
      {/if}
    </li>
    <li><button on:click={reportsHandle}>Reports</button></li>
  </ul>
  <hr />
</div>

<style>
  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    margin: 0 1rem 0 0;
  }
  .login {
    color: black;
  }
  .logout {
    color: red;
    cursor: pointer;
  }
</style>
