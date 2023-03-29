<script lang="ts">
  import type { Book } from '../domain/book/Book';
  import BookListItem from './BookListItem.svelte';

  export let books: Book[];
</script>

<div>
  {#each books as book}
    <BookListItem {book} />
  {/each}
</div>
