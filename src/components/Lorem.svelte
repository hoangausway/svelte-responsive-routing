<script>
  import Logout from './Logout.svelte'
  export let params
</script>

<div class="lorem">
  Lorem params.repeat = <span>{params && params.repeat}</span>
</div>

<style>
  .lorem {
    width: 100%;
    background-color: papayawhip;
  }
  span {
    font-size: 3rem;
    font-weight: bold;
  }
</style>
