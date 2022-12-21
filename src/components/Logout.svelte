<script>
  import {auth} from '../services/auth';
</script>

<button on:click={() => $auth.reset()}>Logout</button>
