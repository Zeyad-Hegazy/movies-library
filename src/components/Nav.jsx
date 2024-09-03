import styles from "../css/nav.module.css";

const Nav = () => {
	return (
		<div>
			<div className={styles["search-bar"]}>
				<input
					type="text"
					placeholder="Search movies..."
					// value={searchTerm}
					// onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default Nav;
