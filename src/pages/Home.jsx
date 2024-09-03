import { useTmdb } from "../context/TmdbProvider.jsx";
import styles from "../css/home.module.css";
import MovieCard from "./../components/MovieCard";

const Home = () => {
	const { featuredMovies, upcomingMovies, topRatedMovies, trendingMovies } =
		useTmdb();

	return (
		<div className={styles["home-container"]}>
			<section className={styles["section"]}>
				<h2 className={styles["section-title"]}>Featured Movies</h2>
				<div className={styles["movies-grid"]}>
					{featuredMovies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</section>

			<section className={styles["section"]}>
				<h2 className={styles["section-title"]}>Upcoming Movies</h2>
				<div className={styles["movies-grid"]}>
					{upcomingMovies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</section>

			<section className={styles["section"]}>
				<h2 className={styles["section-title"]}>Top Rated Movies</h2>
				<div className={styles["movies-grid"]}>
					{topRatedMovies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</section>

			<section className={styles["section"]}>
				<h2 className={styles["section-title"]}>Trending Movies</h2>
				<div className={styles["movies-grid"]}>
					{trendingMovies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
