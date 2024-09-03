import React from "react";
import styles from "../css/home.module.css";

const MovieCard = ({ movie }) => {
	return (
		<div className={styles["movie-card"]}>
			<img
				src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
				alt={movie.title}
				className={styles["movie-image"]}
			/>
			<div className={styles["movie-info"]}>
				<h3 className={styles["movie-title"]}>{movie.title}</h3>
				<p className={styles["movie-date"]}>{movie.release_date}</p>
				{/* <p className={styles["movie-overview"]}>{movie.overview}</p> */}
			</div>
		</div>
	);
};

export default MovieCard;
