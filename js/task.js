import galleryObj from '../gallery-items.js';

const galleryContainer = document.querySelector('ul.gallery');
const cardsMarkup = createGalleryCards(galleryObj);

const lightboxRef = document.querySelector('.lightbox');
const btnRef = document.querySelector('[data-action="close-lightbox"]');
const overlayRef = document.querySelector('.lightbox__overlay');
const lightboxImageRef = document.querySelector('.lightbox__image');

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

let currentImageIndex = 0;

function createGalleryCards(galleryObj) {
  return galleryObj
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}"
              data-source="${original}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
}

function onClickHandler(evt) {
  evt.preventDefault();

  if (evt.target.nodeName === 'IMG') {
    const searchAlt = `${evt.target.alt}`;
    const originalId = galleryObj.find((city) => city.description === searchAlt).original;
    currentImageIndex = galleryObj.findIndex((city) => city.description === searchAlt);
    lightboxRef.classList.add('is-open');
    lightboxImageRef.src = originalId;
    lightboxImageRef.alt = evt.target.alt;
    window.addEventListener('keydown', onKeyPress);
  }
}

function onCloseHandler(evt) {
  if (
    evt.target.nodeName === 'I' ||
    evt.target.nodeName === 'BUTTON' ||
    evt.currentTarget === overlayRef
  ) {
    lightboxRef.classList.remove('is-open');
    window.removeEventListener('keydown', onKeyPress);
  }
}

function onKeyPress(evt) {
  if (evt.code === 'ArrowLeft') {
    currentImageIndex = (currentImageIndex - 1 + galleryObj.length) % galleryObj.length;
    lightboxImageRef.src = galleryObj[currentImageIndex].original;
    lightboxImageRef.alt = galleryObj[currentImageIndex].description;
  }

  if (evt.code === 'ArrowRight') {
    currentImageIndex = (currentImageIndex + 1) % galleryObj.length;
    lightboxImageRef.src = galleryObj[currentImageIndex].original;
    lightboxImageRef.alt = galleryObj[currentImageIndex].description;
  }
}

galleryContainer.addEventListener('click', onClickHandler);
btnRef.addEventListener('click', onCloseHandler);
overlayRef.addEventListener('click', onCloseHandler);
