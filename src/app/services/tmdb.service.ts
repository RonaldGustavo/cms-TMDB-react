import callAPI from "config/axios/httpConfig";

const baseURL = import.meta.env.REACT_APP_API_URL
const apiKey = import.meta.env.REACT_APP_API_KEY
const token = import.meta.env.REACT_APP_TOKEN

const config ={
      'Authorization': `Bearer ${token}`,
      'accept': 'application/json',
}

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
  const url = `${baseURL}3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page || 1}&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`;
  return callAPI({
    url,
    method: 'GET',
    config: config
  });
}

