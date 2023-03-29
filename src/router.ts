import AboutScreen from './screens/AboutScreen.svelte';
import BookDetailScreen from './screens/BookDetailScreen.svelte';
import ErrorScreen from './screens/ErrorScreen.svelte';
import HomeScreen from './screens/HomeScreen.svelte';

export const routes = {
  // Exact path
  '/books': HomeScreen,
  '/books/:isbn': BookDetailScreen,
  '/about': AboutScreen,

  '*': ErrorScreen,
};
