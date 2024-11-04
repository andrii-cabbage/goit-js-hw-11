import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { noApiResponse, noImagesMessage } from './js/render-functions.js';
import './css/header.css';
import { createImageCard } from './js/render-functions.js';

const elements = {
  submitBtn: document.querySelector(`.js-submit-btn`),
  form: document.querySelector(`form[data-form]`),
  input: document.querySelector(`input[data-input]`),
  gallery: document.querySelector(`.gallery`),
  loading: document.querySelector(`.loadingText`),
};

const lightbox = new SimpleLightbox('.image-link', {
  captions: true,
  captionSelector: `img`,
  captionsData: `alt`,
  captionType: `attr`,
  captionPosition: `bottom`,
  captionDelay: 250,
});

function handleFormSubmit(event) {
  event.preventDefault();

  const trimmedInput = elements.input.value.trim();
  const userInputValue = elements.input.value;

  function emptyInputInfo() {
    if (trimmedInput === '') {
      elements.submitBtn.disabled = true;
      console.log(`input is empty`);
      noImagesMessage();
      return true;
    }
    elements.submitBtn.disabled = false;
    return false;
  }

  const loadingText = document.getElementById('loadingText');

  function processImages(res) {
    const images = res.hits;
    let imageMarkup = '';
    images.forEach(image => {
      imageMarkup += createImageCard(image);
    });
    elements.gallery.innerHTML = imageMarkup;
    lightbox.refresh();
  }

  elements.gallery.innerHTML = '';
  elements.form.reset();

  if (emptyInputInfo()) {
    elements.submitBtn.disabled = false;
    return;
  }

  elements.loading.style.display = 'block';

  fetchImages(userInputValue)
    .then(res => {
      setTimeout(() => {
        elements.loading.style.display = 'none';
        if (res.hits.length === 0) {
          noApiResponse();
          return;
        }
        processImages(res);
        elements.gallery.style.display = 'flex';
      }, 1000);
    })
    .catch(error => {
      elements.loading.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: 'No Images found or an error occurred while fetching images.',
      });
    });
}

elements.form.addEventListener(`submit`, handleFormSubmit);