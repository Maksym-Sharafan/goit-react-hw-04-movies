// 'https://api.themoviedb.org/3/trending/all/day?api_key=e5dd0cefcdac97deba005f51e1b5da77'
//     `https://api.themoviedb.org/3/search/movie?api_key=e5dd0cefcdac97deba005f51e1b5da77&language=en-US&query=${searchQuery}&page=1&include_adult=false`
//     `https://api.themoviedb.org/3/movie/${moviesId}?api_key=e5dd0cefcdac97deba005f51e1b5da77&language=en-US`
// `https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=e5dd0cefcdac97deba005f51e1b5da77&language=en-US`
// `https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=e5dd0cefcdac97deba005f51e1b5da77&language=en-US&page=1`

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=e5dd0cefcdac97deba005f51e1b5da77';

export const fetchTrendingMovies = () => {
  return fetch(`${BASE_URL}trending/all/day?${API_KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("It's not good!!!"));
  });
};

export function fetchMoviesOnKeyWord(searchQuery) {
  return fetch(
    `${BASE_URL}search/movie?${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("It's not good!!!"));
  });
}

export function fetchTakeMoviesById(moviesId) {
  return fetch(`${BASE_URL}movie/${moviesId}?${API_KEY}&language=en-US`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error("It's not good!!!"));
    },
  );
}

export function fetchTakeCast(moviesId) {
  return fetch(
    `${BASE_URL}movie/${moviesId}/credits?${API_KEY}&language=en-US&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("It's not good!!!"));
  });
}

export function fetchTakeReviews(moviesId) {
  return fetch(
    `${BASE_URL}movie/${moviesId}/reviews?${API_KEY}&language=en-US&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("It's not good!!!"));
  });
}
