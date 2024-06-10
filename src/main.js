import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchQuery from './js/pixabay-api';
import render from './js/render-functions';

const refs = {
  formSearch: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

let query = '';

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

iziToast.settings({
  timeout: 3000,
  transitionIn: 'fadeInDown',
  position: 'topRight',
});

refs.loader.classList.add('disable');
refs.formSearch.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  query = e.currentTarget.elements.searchQuery.value;
  if (!query) {
    return;
  }
  refs.loader.classList.remove('disable');

  fetchQuery(query)
    .then(response => {
      refs.loader.classList.add('disable');
      if (response.totalHits) {
        refs.gallery.innerHTML = '';
        onSuccess(response.totalHits);
        refs.gallery.insertAdjacentHTML('beforeend', render(response.hits));

        gallery.refresh();
      } else {
        refs.gallery.innerHTML = '';
        onError();
      }
    })
    .catch(err => console.log(err))
    .finally(refs.formSearch.reset());
}

function onSuccess(totalHits) {
  iziToast.success({
    title: 'OK',
    message: `Hooray! We found ${totalHits} images.`,
    iconUrl: './img/iconSuccess.svg',
    theme: 'dark',
    color: 'rgb(89, 161, 13)',
  });
}

function onError() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    iconUrl: './img/iconError.svg',
    theme: 'dark',
    color: 'rgb(239, 64, 64)',
  });
}
