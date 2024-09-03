import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../css/searchResult.module.css";
import { useTmdb } from "../context/TmdbProvider";
import MovieCard from "../components/MovieCard";

const SearchResult = () => {
	const { searchResults, loading, searchMovies } = useTmdb();
	const [cachedResults, setCachedResults] = useState([]);
	const [searchParams] = useSearchParams();
	const query = searchParams.get("result");

	useEffect(() => {
		if (query) {
			const cachedData = localStorage.getItem(`search_${query}`);
			if (cachedData) {
				setCachedResults(JSON.parse(cachedData));
			} else {
				searchMovies(query);
			}
		}
	}, [query, searchMovies]);

	const resultsToDisplay =
		searchResults.length > 0 ? searchResults : cachedResults;

	return (
		<div className={styles["search-container"]}>
			<section className={styles["section"]}>
				<h2 className={styles["section-title"]}>
					Search Results for "{query}"
				</h2>
				{loading ? (
					<p>Loading...</p>
				) : (
					<div className={styles["movies-grid"]}>
						{resultsToDisplay.length > 0 ? (
							resultsToDisplay.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
							))
						) : (
							<p>No results found.</p>
						)}
					</div>
				)}
			</section>
		</div>
	);
};

export default SearchResult;
