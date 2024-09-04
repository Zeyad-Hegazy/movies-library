import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTmdb } from "../context/TmdbProvider";
import styles from "../css/movieDetails.module.css";
import AddToWatchlist from "./../components/AddToWatchlist";

const MovieDetails = () => {
	const { movieId } = useParams();
	const {
		getMovieDetails,
		movieDetails,
		loading,
		addMovieToWatchlist,
		watchlist,
		watched,
		removeMovieFromWatchlist,
		markAsWatched,
	} = useTmdb();

	const [isWatchlisted, setIsWatchListed] = useState(false);
	const [isWatched, setIsWatched] = useState(false);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				await getMovieDetails(movieId);
			} catch (error) {
				console.error("Error fetching movie details:", error);
			}
		};

		if (movieId) {
			fetchMovieDetails();
		}
	}, [movieId, getMovieDetails]);

	useEffect(() => {
		if (movieDetails) {
			setIsWatchListed(watchlist.some((movie) => movie.id === movieDetails.id));
			setIsWatched(watched.some((movie) => movie.id === movieDetails.id));
		}
	}, [movieDetails, watchlist, watched]);

	const handleAddToWatchlist = () => {
		addMovieToWatchlist(movieDetails);
	};

	const handleRemoveFromWatchlist = () => {
		removeMovieFromWatchlist(movieDetails.id);
	};

	const handleMarkAsWatched = () => {
		markAsWatched(movieDetails);
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!movieDetails) {
		return <p>Movie not found.</p>;
	}

	return (
		<div className={styles["movie-details-container"]}>
			<div className={styles["movie-header"]}>
				<img
					src={
						movieDetails.poster_path
							? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
							: "/placeholder.png"
					}
					alt={`${movieDetails.title} Poster`}
					className={styles["movie-poster"]}
				/>
				<div className={styles["movie-info"]}>
					<div>
						<h2 className={styles["movie-title"]}>
							{movieDetails.title}
							{movieDetails.title !== movieDetails.original_title && (
								<span>&quot; {movieDetails.original_title} &quot;</span>
							)}
						</h2>
						<h5>{movieDetails.tagline}</h5>
					</div>
					<p className={styles["movie-rating"]}>
						Rating: {movieDetails.vote_average} / 10
					</p>
					<p className={styles["movie-release-date"]}>
						Release Date: {movieDetails.release_date}
					</p>
					<div className="genre-list" aria-label="Movie genres">
						{movieDetails.genres.map((genre, index) => (
							<span key={genre.id} className="genre-item">
								{genre.name}
								{index < movieDetails.genres.length - 1 && (
									<span className="separator"> - </span>
								)}
							</span>
						))}
					</div>

					<AddToWatchlist
						isWatchListed={isWatchlisted}
						isWatched={isWatched}
						handleAddToWatchlist={handleAddToWatchlist}
						handleRemoveFromWatchlist={handleRemoveFromWatchlist}
						handleMarkAsWatched={handleMarkAsWatched}
					/>
				</div>
			</div>
			<div className={styles["movie-plot"]}>
				<h3>Plot</h3>
				<p>{movieDetails.overview}</p>
			</div>
			<div className={styles["movie-cast"]}>
				<h3>Cast</h3>
				<ul className={styles["cast-list"]}>
					{movieDetails.credits.cast.map((actor) => (
						<li key={actor.id} className={styles["cast-item"]}>
							<img
								src={
									actor.profile_path
										? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
										: "/placeholder-profile.png"
								}
								alt={actor.name}
								className={styles["cast-image"]}
							/>
							<p className={styles["cast-name"]}>{actor.name}</p>
							<p className={styles["cast-character"]}>as {actor.character}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MovieDetails;
