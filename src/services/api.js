import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '33568a128855e2d7f5d79e8ab4e4635b';

export const fetchTranding = async () => {
    const END_POINT = 'trending/movie/day';
    const response = await axios.get(`${END_POINT}?api_key=${API_KEY}`)
    return response.data.results;
}

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`)
    return response.data;

}

export const fetchMovieCast = async (movieId) => {
    const responce = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`)
    return responce.data;
}