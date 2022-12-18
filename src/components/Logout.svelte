<script>
  import { authed } from '../routing/routes'
</script>

<button on:click={() => ($authed = false)}>Logout</button>
