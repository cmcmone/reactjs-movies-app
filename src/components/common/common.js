const baseMovieURL = 'https://api.themoviedb.org/3/search/movie';
export const baseImgURL = 'https://image.tmdb.org/t/p/original';
export const baseImgW500URL = 'https://image.tmdb.org/t/p/w500';
export const baseMovieByIdURL = 'https://api.themoviedb.org/3/movie/';
export const baseUpcomingURL = 'https://api.themoviedb.org/3/movie/upcoming';
const basePopularURL = 'https://api.themoviedb.org/3/movie/popular';

const api_key = '64000d0a27fcec0f7e803d59653377d0';

export const axiosKeywordConfig = {
  baseURL: baseMovieURL,
  api_key: api_key,
  page: 1,
  include_adult: false,
};

export const movieDetails = {
  baseURL: baseMovieByIdURL,
  api_key: api_key,
};

export const upcoming = {
  baseURL: baseUpcomingURL,
  api_key: api_key,
};

export const popular = {
  baseURL: basePopularURL,
  api_key: api_key,
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
