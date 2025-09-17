import axios from 'axios';
const API_KEY = '21847975-d0fb10f6989c918e9c55b7840';
axios.defaults.baseURL = 'https://pixabay.com/api';

export default async function fetchPictures(searchData, perPage = 10, imageType = "photo", orientation = "horizontal", safesearch = true) {
  const response = await axios.get(
    `/`, {
    params: {
      key: API_KEY,
      q: searchData,
      per_page: perPage,
      image_type: imageType,
      orientation: orientation,
      safesearch: safesearch
    }
  }
  )
  return response.data;
}