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

listEl.insertAdjacentHTML('beforeend', markupItemEl)// ADD MARKUP IN HTML

listEl.addEventListener('click', onClick);// CREAT A LISTENER ON CLICK

// ? CALLBACK LISTENER FUNCTION OPEN MODAL ON CLICK
function onClick(evt){
      evt.preventDefault();
      if (!evt.target.classList.contains('gallery__image')){
            return;
      }
      const instance = basicLightbox.create(`
      <img class="gallery__image" src="${evt.target.dataset.source}" alt="${evt.target.description}"/>
      `, {
            onShow: function() {
                  document.addEventListener('keydown', onEsc); // CREAT A LISTENER ON KEY ESC
                },
            onClose: function() {
                  document.removeEventListener('keydown', onEsc); // document.removeEventListener('keydown', onEsc);// REMUVE A LISTENER ON KEY ESC
                }
      })

      instance.show()

      

// ? CALLBACK LISTENER FUNCTION CLOSE MODAL ON ESC
      function onEsc(evt){
            if (evt.key === 'Escape'){
                  instance.close();
            }
      }
}