import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import fetchPictures from "./js/pixabay-api"
import renderPictures from "./js/render-functions";

let searchData = "";
const searchForm = document.querySelector("form.search-form");
const gallery = document.querySelector("ul.gallery");

searchForm.addEventListener("input", (evt) => {
  searchData = evt.target.value
});

searchForm.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  if (!searchData) {
    iziToast.warning({
      icon: '',
      position: 'topRight',
      message: 'Please, fill the search field'
    });
    return
  }

  gallery.innerHTML = '<span class="loader"></span>'
  try {
    const pictures = await fetchPictures(searchData, 24)
    gallery.innerHTML = ''
    if (pictures.totalHits === 0) {
      throw new Error("Sorry, there are no images matching your search query. Please try again!");
    }
    renderPictures(pictures.hits, gallery)
    lightbox.refresh()
  }
  catch (error) {
    gallery.innerHTML = ''
    iziToast.error({
      icon: '',
      position: 'topRight',
      message: error.message
    })
  }

  searchData = "";
  searchForm.reset();
});

var lightbox = new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});
