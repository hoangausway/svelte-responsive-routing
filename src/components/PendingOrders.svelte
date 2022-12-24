<script>
  import {usePendingOrdersByLocId} from '../states/useRemoteStates';

  export let params;

  const queryResult = usePendingOrdersByLocId(params.locId);
  $: console.log('$queryResult', $queryResult);
</script>

<div class="pending-orders">
  Location Id = <span>{params && params.locId}</span>
  {#if $queryResult.isLoading}
    Loadng...
  {:else if $queryResult.isFetched}
    <ul>
      {#each $queryResult.data.data as order}
        <li>
          {order.statusName} | Items: {order.cart.length} | tsPickup: {order.tsPickup /
            1000}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .pending-orders {
    width: 100%;
    background-color: papayawhip;
  }
  span {
    font-size: 3rem;
    font-weight: bold;
  }
</style>
