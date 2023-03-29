<script lang="ts">
  import type { Book } from '../domain/book/Book';
  import Hideable from './Hideable.svelte';
  import LikeCounter from './LikeCounter.svelte';

  const getPriceRating = (price: string) => {
    if (!price) return;
    const priceNumber = parseInt(price.substring(1));
    if (isNaN(priceNumber)) return '';
    if (priceNumber <= 10) return '$';
    if (priceNumber <= 30) return '$$';
    return '$$$';
  };

  export let book: Book;

  let likes = 0;
  const isFree = book.price === '$0.00';
</script>

<div class={`book-list-item ${isFree ? 'book-list-item_free' : ''}`}>
  <a href={`#/books/${book.isbn}`}>
    <h2>
      {#if likes >= 5}
        <span class="icon_entry">⭐ </span>
      {/if}
      {#if isFree}
        <span>💰 </span>
      {/if}
      {book.title}
    </h2>
  </a>
  <h3>{book.subtitle}</h3>
  {#if !isFree}
    <div style="color:green">{getPriceRating(book.price)}</div>
  {/if}
  <div class="text-meta">by {book.author}</div>

  <LikeCounter bind:likes />
  <Hideable>
    <p>{book.abstract}</p>
  </Hideable>
</div>
