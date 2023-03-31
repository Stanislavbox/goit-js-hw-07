import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

// ? CREAT MARKUP
const markupItemEl = galleryItems.map(({preview, original, description}) => 
      `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
      </li>`
).join('');

listEl.insertAdjacentHTML('beforeend', markupItemEl)// ADD MARKUP IN HTML


// ? INITIAL LIGHTBOX AND ADD OPTIONS
var lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionDelay: 250,
      captionsData: 'alt'
 });