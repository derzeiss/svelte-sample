<script lang="ts">
  import logo from '../assets/logo.png';
  import active from 'svelte-spa-router/active';
</script>

<header class="app-header">
  <img src={logo} alt="Awesome comic-style monkey with sunglasses" />
  <h1>Bookmonkey</h1>

  <nav>
    <a href="#/books" use:active>Books</a>
    <a href="#/about" use:active>About</a>
    <a href="#/counter" use:active>Counter</a>
  </nav>
</header>
