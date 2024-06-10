import { BASE_URL, API_KEY } from './components';

function fetchQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
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
export default fetchQuery;
