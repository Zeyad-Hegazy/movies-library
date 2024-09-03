import styles from "../css/movieCard.module.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
	const navigate = useNavigate();
	const getMovieDateils = (id) => {
		navigate(`/movie/${id}`);
	};

	return (
		<div
			className={styles["movie-card"]}
			onClick={() => getMovieDateils(movie.id)}
		>
			<img
				src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
				alt={movie.title}
				className={styles["movie-image"]}
			/>
			<div className={styles["movie-info"]}>
				{movie.adult && <div className={styles["adult"]}>+18</div>}
				<h3 className={styles["movie-title"]}>{movie.title}</h3>
				<p className={styles["movie-date"]}>{movie.release_date}</p>
				{/* <p className={styles["movie-overview"]}>{movie.overview}</p> */}
			</div>
		</div>
	);
};

export default MovieCard;
