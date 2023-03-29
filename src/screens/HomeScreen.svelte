<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchBooks } from '../domain/book/api';
  import type { Book } from '../domain/book/Book';
  import BookList from '../lib/BookList.svelte';

  let books: Book[] = [];

  onMount(() => {
    fetchBooks().then((data) => (books = data));
  });
</script>

<main>
  <BookList {books} />
</main>
