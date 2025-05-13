const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results || [];
};

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return await handleResponse(response);
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
    throw error;
  }
};

export const searchMovies = async (searchQuery) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`
    );
    return await handleResponse(response);
  } catch (error) {
    console.error("Failed to search movies:", error);
    throw error;
  }
};
