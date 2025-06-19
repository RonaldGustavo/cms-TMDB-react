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

export async function getListUpComing(page: number, region: string) {
  const url = `${baseURL}3/movie/upcoming?api_key=${apiKey}&page=${page}&region=${region}`;
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

export async function getListGenreMovie(language: string) {
  const url = `${baseURL}3/genre/movie/list?api_key=${apiKey}&language=${language || 'en'}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getListGenretv(language: string) {
  const url = `${baseURL}3/genre/tv/list?api_key=${apiKey}&language=${language || 'en'}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getListProviderMovie(region: string) {
  const url = `${baseURL}3/watch/providers/movie?api_key=${apiKey}&language=en-US&watch_region=${region || 'US'}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

export async function getListProviderTv(region: string) {
  const url = `${baseURL}3/watch/providers/tv?api_key=${apiKey}&language=en-US&watch_region=${region || 'US'}`;
  return callAPI({
    url,
    method: 'GET',
  });
}

