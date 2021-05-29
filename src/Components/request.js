require('dotenv').config();

const API_KEY = process.env.API_KEY;


console.log(API_KEY);
export default {
    fetchTending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
    fetchTopRated: `https://api.themoviedb.org/3/trending/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTv: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=1070`,
}