import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import fetchPictures from "./js/pixabay-api"
import renderPictures from "./js/render-functions";

let searchData = "";
let searchQuery = ""
let currentPage = 1;
let perPage = 15;
const searchForm = document.querySelector("form.search-form");
const gallery = document.querySelector("ul.gallery");
const loadMoreBtn = document.querySelector("button.load-more-btn");
const loader = document.querySelector("span.loader");

searchForm.addEventListener("input", (evt) => {
  searchData = evt.target.value;
});

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (!searchData) {
    iziToast.warning({
      icon: '',
      position: 'topRight',
      message: 'Please, fill in the search field'
    });
    return
  }
  gallery.innerHTML = '';
  currentPage = 1;
  searchQuery = searchData
  loadAndRenderPictures()
  searchData = "";
  searchForm.reset();
});

loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

var lightbox = new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});

async function loadAndRenderPictures() {
  loadMoreBtn.classList.add('visually-hidden');
  loader.classList.remove('visually-hidden');
  try {
    const pictures = await fetchPictures(searchQuery, currentPage, perPage);
    currentPage += 1;
    if (pictures.totalHits === 0) {
      throw new Error("Sorry, there are no images matching your search query. Please try again!");
    }
    renderPictures(pictures.hits, gallery)
    lightbox.refresh()
    loader.classList.add('visually-hidden');
    showLoadMoreBtn(currentPage, perPage, pictures.totalHits)
  }
  catch (error) {
    loader.classList.add('visually-hidden');
    iziToast.error({
      icon: '',
      position: 'topRight',
      message: error.message
    })
  }
}

function showLoadMoreBtn(currentPage, perPage, total) {
  const totalPages = Math.ceil(total / perPage);
  if (currentPage > totalPages) {
    return iziToast.error({
      position: "topRight",
      message: "We're sorry, but you've reached the end of search results."
    });
  }
  loadMoreBtn.classList.remove('visually-hidden');
}

function onLoadMoreBtnClick() {
  loadMoreBtn.classList.add('visually-hidden');
  loadAndRenderPictures()
}