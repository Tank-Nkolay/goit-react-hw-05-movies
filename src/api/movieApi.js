import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const paramsTraiding = 'trending/movie/day?';
const SEARCH_URL = 'search/movie?';

const API_KEY = 'api_key=ca2a773c1a5457f1c3e0c6f68586d44e';
const lang = 'language=en-US';

export async function fetchTraidingFilms() {
  const { data } = await axios.get(`/${paramsTraiding}${API_KEY}`);

  return data;
}

export async function fetchFilmsById(id) {
  const { data } = await axios.get(`/movie/${id}?${lang}&${API_KEY}`);

  return data;
}

export async function fetchSearchFilms(query) {
  const { data } = await axios.get(`/${SEARCH_URL}&query=${query}&${API_KEY}`);

  return data;
}

export async function fetchFilmsCast(id) {
  const { data } = await axios.get(`/movie/${id}/credits?${lang}&${API_KEY}`);

  return data;
}

export async function fetchFilmsReview(id) {
  const { data } = await axios.get(`/movie/${id}/reviews?${lang}&${API_KEY}`);

  return data;
}
