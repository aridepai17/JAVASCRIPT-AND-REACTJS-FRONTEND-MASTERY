const API_KEY = "57d3ec90da253e8bbf06a57efb0e027b";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${encodeURIComponent(
      searchQuery
    )}`
  );
  const data = await response.json();
  return data.results;
};
