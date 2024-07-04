import { BASE_URL } from './url';

const apiKey = import.meta.env.VITE_API_KEY;

export class FetchAPI {
  constructor() {
    this.searchQuery = '';
  }

  fetchQuery() {
    const params = new URLSearchParams({
      key: apiKey,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
    });

    return fetch(`${BASE_URL}?${params}`).then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
