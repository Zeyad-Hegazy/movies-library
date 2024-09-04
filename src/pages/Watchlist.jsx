import styles from "../css/watchlist.module.css";
import MovieCard from "../components/MovieCard";
import { useTmdb } from "./../context/TmdbProvider";

const Watchlist = () => {
	const { watchlist } = useTmdb();

	return (
		<div className={styles["watchlist-contanier"]}>
			<section className={styles["section"]}>
				<h2 className={styles["section-title"]}>Watchlist</h2>
				{watchlist.length > 0 ? (
					<div className={styles["movies-grid"]}>
						{watchlist.map((movie) => (
							<MovieCard key={movie.id} movie={movie} />
						))}
					</div>
				) : (
					<p className={styles["noMovies"]}>no movies in watch list</p>
				)}
			</section>
		</div>
	);
};

export default Watchlist;
