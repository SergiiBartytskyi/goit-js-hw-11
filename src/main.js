import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './components/refs';
import { onSuccess, onError } from './components/notifications';
import { FetchAPI } from './components/fetchService';
import { appendImagesMarkup } from './components/appendImagesMarkup';

const fetchAPI = new FetchAPI();

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

refs.loader.classList.add('disable');
refs.formSearch.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  fetchAPI.query = form.elements.searchQuery.value;

  if (!fetchAPI.query) {
    return;
  }

  refs.gallery.innerHTML = '';
  refs.loader.classList.remove('disable');

  fetchAPI
    .fetchQuery()
    .then(({ totalHits, hits }) => {
      if (totalHits) {
        onSuccess(totalHits);
        appendImagesMarkup(hits);
        gallery.refresh();
      } else {
        onError();
      }
    })
    .catch(err => console.log(err))
    .finally(() => {
      form.reset();
      refs.loader.classList.add('disable');
    });
}
