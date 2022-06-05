import {environment} from "../../environments/environment";


const {API, IMG} = environment;

export const urls = {
  movie: `${API}/discover/movie`,
  genres: `${API}/genre/movie/list`,
  movieSearch: `${API}/search/movie`,
  movieById: `${API}/movie`,
  getPoster200: `${IMG}/w200`,
  getPoster300: `${IMG}/w300`,
  getPoster400: `${IMG}/w400`,
  getPoster500: `${IMG}/w500`
}
