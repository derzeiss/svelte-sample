<script lang="ts">
  import AppHeader from './lib/AppHeader.svelte';
  import Router from 'svelte-spa-router';
  import { routes } from './router';
</script>

<AppHeader />
<Router {routes} />
