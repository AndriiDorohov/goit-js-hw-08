import galleryObj from '../gallery-items.js';

const galleryContainer = document.querySelector('ul.gallery');
const cardsMarkup = creatGalleryCards(galleryObj);

const lightboxRef = document.querySelector('.lightbox');
const btnRef = document.querySelector('[data-action="close-lightbox"]');


galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)


function creatGalleryCards(galleryObj) {
    return galleryObj.map(({ preview, original, description}) => {
        return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}"
            data-source="${original}" alt="${description}" />
    </a>
    </li>
    `
    }).join('');
}
 
function onClickHandler(evt) {
  evt.preventDefault();
  

    if (evt.target.nodeName === 'IMG') {
        let searchAlt = `${evt.target.alt}`;
        let originalId = galleryObj.find(city => city.description === searchAlt).original
        lightboxRef.classList.add('is-open');
        lightboxRef.querySelector('.lightbox__image').src = originalId;
        lightboxRef.querySelector('.lightbox__image').alt = evt.target.alt;
  }
}

function onCloseHandler(evt) {
  if(evt.target.nodeName === "I" || evt.target.nodeName === "BUTTON") {
    lightboxRef.classList.remove('is-open');
  }
}

galleryContainer.addEventListener('click', onClickHandler);
btnRef.addEventListener('click', onCloseHandler);