import {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from "react";

const TmdbContext = createContext();

export const useTmdb = () => useContext(TmdbContext);

const API_KEY = "df95467cac1df8a806e1c910ebab2483";
const BASE_URL = "https://api.themoviedb.org/3";

export const TmdbProvider = ({ children }) => {
	const [searchResults, setSearchResults] = useState([]);
	const [movieDetails, setMovieDetails] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [featuredMovies, setFeaturedMovies] = useState([]);
	const [upcomingMovies, setUpcomingMovies] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [watchlist, setWatchlist] = useState(() => {
		const storedWatchlist = localStorage.getItem("watchlist");
		return storedWatchlist ? JSON.parse(storedWatchlist) : [];
	});
	const [watched, setWatched] = useState(() => {
		const savedWatched = localStorage.getItem("watched");
		return savedWatched ? JSON.parse(savedWatched) : [];
	});
	const searchMovies = async (query) => {
		setLoading(true);
		try {
			const cachedResults = localStorage.getItem(`search_${query}`);

			if (cachedResults) {
				setSearchResults(JSON.parse(cachedResults));
				setLoading(false);
				return;
			}

			const response = await fetch(
				`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
					query
				)}`
			);
			const data = await response.json();
			setSearchResults(data.results);

			localStorage.setItem(`search_${query}`, JSON.stringify(data.results));
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const getMovieDetails = useCallback(async (movieId) => {
		setLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`
			);
			const data = await response.json();
			setMovieDetails(data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}, []);
	const fetchFeaturedMovies = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}/movie/popular?api_key=${API_KEY}`
			);
			const data = await response.json();
			setFeaturedMovies(data.results);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const fetchUpcomingMovies = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
			);
			const data = await response.json();
			setUpcomingMovies(data.results);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const fetchTopRatedMovies = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
			);
			const data = await response.json();
			setTopRatedMovies(data.results);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const fetchTrendingMovies = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
			);
			const data = await response.json();
			setTrendingMovies(data.results);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const addMovieToWatchlist = (movie) => {
		const isAlreadyInWatchlist = watchlist.some(
			(watchlistMovie) => watchlistMovie.id === movie.id
		);

		if (isAlreadyInWatchlist) {
			alert("This movie is already in your watchlist.");
			return;
		}

		const updatedWatchlist = [...watchlist, movie];
		setWatchlist(updatedWatchlist);
		localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
	};

	const removeMovieFromWatchlist = (movieId) => {
		const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
		setWatchlist(updatedWatchlist);
		localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
	};

	const markAsWatched = (movie) => {
		removeMovieFromWatchlist(movie.id);
		const updatedWatched = [...watched, movie];
		setWatched(updatedWatched);
		localStorage.setItem("watched", JSON.stringify(updatedWatched));
	};

	useEffect(() => {
		fetchFeaturedMovies();
		fetchUpcomingMovies();
		fetchTopRatedMovies();
		fetchTrendingMovies();
	}, []);

	return (
		<TmdbContext.Provider
			value={{
				searchResults,
				movieDetails,
				loading,
				error,
				featuredMovies,
				upcomingMovies,
				topRatedMovies,
				trendingMovies,
				watchlist,
				watched,
				searchMovies,
				getMovieDetails,
				fetchFeaturedMovies,
				fetchUpcomingMovies,
				fetchTopRatedMovies,
				fetchTrendingMovies,
				addMovieToWatchlist,
				removeMovieFromWatchlist,
				markAsWatched,
			}}
		>
			{children}
		</TmdbContext.Provider>
	);
};
