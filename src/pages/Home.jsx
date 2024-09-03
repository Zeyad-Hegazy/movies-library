import { useState } from "react";
import { useTmdb } from "../context/TmdbProvider.jsx";
import styles from "../css/home.module.css";

const Home = () => {
	const { movies } = useTmdb();
	const [searchTerm, setSearchTerm] = useState("");

	const filteredMovies = movies.filter((movie) =>
		movie.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className={styles["home-container"]}>
			<div className={styles["movies-grid"]}>
				{filteredMovies.map((movie) => (
					<div key={movie.id} className={styles["movie-card"]}>
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
				))}
			</div>
		</div>
	);
};

export default Home;
