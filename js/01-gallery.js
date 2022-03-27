import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const createGalleryMarkup = ({ preview, original, description }) =>
    `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`;
const galleryRenderMarkup = document.querySelector(".gallery");
galleryRenderMarkup.insertAdjacentHTML(
    "beforeend",
    galleryItems.map(createGalleryMarkup).join("")
);
galleryRenderMarkup.addEventListener("click", onClick);
function onClick(event) {
    if (event.target.nodeName !== "IMG") {
    return;
    }
    event.preventDefault();
    modal(event.target.dataset.source);
}
let instance = null;
function modal(src) {
    instance = basicLightbox.create(`<img src="${src}"></img>`, {
    onShow: () => {
        addListener();
    },
    onClose: () => {
        removeListener();
    },
    });
    instance.show();
}
function addListener() {
    window.addEventListener("keydown", onEscClick);
}
function onEscClick(event) {
    if (event.code === "Escape") {
    instance.close();
    }
}
function removeListener() {
    window.removeEventListener("keydown", onEscClick);
}