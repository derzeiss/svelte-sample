<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchBook } from '../domain/book/api';
  import type { Book } from '../domain/book/Book';

  export let params: { bookId: string } = { bookId: undefined };

  let book = {} as Book;

  onMount(() => {
    console.log(params.bookId);
    fetchBook(params.bookId).then((data) => (book = data));
  });
</script>

<div class="book-detail-screen">
  <img src={book.cover} alt={book.title} />
  <h2>{book.title}</h2>
  <h3>{book.subtitle}</h3>
  <div class="text-meta">by {book.author}</div>
  <small>
    {book.isbn} | {book.numPages} pages
  </small>
  <h2 class="m-top m-bottom">{book.price}</h2>
  <p class="m-top">{book.abstract}</p>

  <a href="edit" class="m-top">
    <button>
      <span>✏️</span>
      Edit
    </button>
  </a>
</div>
