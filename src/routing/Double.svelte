<script>
  export let props;
  $: params = props.params;
  $: route = props.route;
  $: left = route.left || route.component;
  $: right = route.right;
  $: paramsForLeft = params && route.component.name === left && left.name;
</script>

<!-- logic per if right component specified -->
{#if right}
  <!-- logic per if there is params and/or the params for left or right component -->
  <div class="double">
    {#if !params}
      <svelte:component this={left} />
      <svelte:component this={right} />
    {:else if paramsForLeft}
      <svelte:component this={left} {params} />
      <svelte:component this={right} />
    {:else}
      <svelte:component this={left} />
      <svelte:component this={right} {params} />
    {/if}
  </div>
{:else if paramsForLeft}
  <svelte:component this={left} {params} />
{:else}
  <svelte:component this={left} />
{/if}

<style>
  .double {
    display: flex;
    flex-direction: row;
    border: 2px solid red;
  }
</style>
