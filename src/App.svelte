<script>
  import Router from './routing/Router.svelte';
  import {authed} from './routing/routes';
</script>

<div>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/lorem/10">Lorem 10</a></li>
    <li><a href="/lorem/22">Lorem 22</a></li>
    <li><a href="/bar">Bar</a></li>
    <li>
      {#if !$authed}
        <a class="login" href="/login">Login</a>
      {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="logout" on:click|preventDefault={() => ($authed = false)}>
          Logout
        </div>
      {/if}
    </li>
  </ul>
  <hr />
  <Router />
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 1rem;
  }

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
