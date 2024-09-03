import { useTmdb } from "../context/TmdbProvider.jsx";
import styles from "../css/home.module.css";
import MovieCard from "./../components/MovieCard";

const Home = () => {
	const { movies } = useTmdb();

	return (
		<div className={styles["home-container"]}>
			<div className={styles["movies-grid"]}>
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
};

export default Home;
