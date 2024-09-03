import { createContext, useContext, useState, useEffect } from "react";

const TmdbContext = createContext();

export const useTmdb = () => useContext(TmdbContext);

const API_KEY = "df95467cac1df8a806e1c910ebab2483";
const BASE_URL = "https://api.themoviedb.org/3";

export const TmdbProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [movieDetails, setMovieDetails] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchPopularMovies = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}/movie/popular?api_key=${API_KEY}`
			);
			const data = await response.json();
			setMovies(data.results);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const searchMovies = async (query) => {
		setLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
					query
				)}`
			);
			const data = await response.json();
			setSearchResults(data.results);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const getMovieDetails = async (movieId) => {
		setLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
			);
			const data = await response.json();
			setMovieDetails(data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPopularMovies();
	}, []);

	return (
		<TmdbContext.Provider
			value={{
				movies,
				searchResults,
				movieDetails,
				loading,
				error,
				fetchPopularMovies,
				searchMovies,
				getMovieDetails,
			}}
		>
			{children}
		</TmdbContext.Provider>
	);
};
