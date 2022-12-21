<script>
  import {QueryClient, QueryClientProvider} from '@sveltestack/svelte-query';
  import Header from './components/Header.svelte';
  import Router from './routing/Router.svelte';

const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <Header />
  <Router />
</QueryClientProvider>
