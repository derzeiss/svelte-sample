import { URL_API } from '../../config';
import type { Book } from './Book';

export const fetchBooks = () => {
  return fetch(`${URL_API}/books`).then((res) => res.json()) as Promise<Book[]>;
};

export const fetchBook = (isbn: string) => {
  const result = fetch(`${URL_API}/books/${isbn}`).then((res) => res.json());
  return result as Promise<Book>;
};

export const updateBook = (book: Book) => {
  return fetch(`${URL_API}/books/${book.isbn}`, {
    method: 'put',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => (res.ok ? res.json() : Promise.reject(res))) as Promise<Book>;
};
