import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

// ? CREAT MARKUP
const markupItemEl = galleryItems.map(({preview, original, description}) =>
       `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </li>`).join('');

// ? ADD MARKUP IN HTML
listEl.insertAdjacentHTML('beforeend', markupItemEl)

// ? CREAT A LISTENER
listEl.addEventListener('click', onClick);

// ? CALLBACK LISTENER FUNCTION
function onClick(evt){
      evt.preventDefault();
      if (!evt.target.classList.contains('gallery__image')){
            return;
      }
      const instance = basicLightbox.create(`
      <img class="gallery__image" src="${evt.target.dataset.source}" alt="${evt.target.description}"/>
      `)
instance.show()
}