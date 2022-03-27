import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const newGalleryMarkup = ({ preview, original, description }) =>
  `<div class="gallery">
<a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>
</div>`;
const renderGalleryMarkup = galleryItems.map(newGalleryMarkup).join("");
document
  .querySelector(".gallery")
  .insertAdjacentHTML("beforeend", renderGalleryMarkup);
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
  enableKeyboard: "true",
});