import callAPI from "config/axios/httpConfig";

const baseURL = import.meta.env.REACT_APP_API_URL
const apiKey = import.meta.env.REACT_APP_API_KEY

export async function getListMoviePopular(page: number) {
  const url = `${baseURL}3/movie/popular?api_key=${apiKey}&page=${page || 1}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getDetailMovie(id: number) {
  const url = `${baseURL}3/movie/${id}?api_key=${apiKey}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getListMoviePlaying(page: number) {
  const url = `${baseURL}3/movie/now_playing?api_key=${apiKey}&page=${page}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getListUpComing(page: number) {
  const url = `${baseURL}3/movie/upcoming?api_key=${apiKey}&page=${page}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getListToprated(page: number) {
  const url = `${baseURL}3/movie/top_rated?api_key=${apiKey}&page=${page}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

