import styles from "../css/nav.module.css";
import { useTmdb } from "../context/TmdbProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
	const { searchMovies } = useTmdb();
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const searchHandler = (e) => {
		e.preventDefault();
		if (searchTerm === "") {
			navigate("/");
			return;
		}
		searchMovies(searchTerm);
		navigate(`/search?result=${encodeURIComponent(searchTerm)}`);
	};

	return (
		<div>
			<div className={styles["search-bar"]}>
				<form onSubmit={searchHandler}>
					<input
						type="text"
						placeholder="Search movies..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button type="submit">Search</button>
				</form>
			</div>
		</div>
	);
};

export default Nav;
