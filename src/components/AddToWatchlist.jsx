import styles from "../css/addToWatchListBtn.module.css";

const AddToWatchlist = ({
	isWatchListed,
	isWatched,
	handleAddToWatchlist,
	handleRemoveFromWatchlist,
	handleMarkAsWatched,
}) => {
	return (
		<>
			{isWatchListed ? (
				<>
					<button
						className={`${styles["watchlist-button"]} ${styles["remove-from-watchlist"]}`}
						onClick={handleRemoveFromWatchlist}
					>
						Remove from Watchlist
					</button>
					<button
						className={`${styles["watchlist-button"]} ${styles["mark-as-watched"]}`}
						onClick={handleMarkAsWatched}
						disabled={isWatched}
					>
						{isWatched ? "Watched" : "Mark as Watched"}
					</button>
				</>
			) : (
				<button
					className={`${styles["watchlist-button"]} ${styles["add-to-watchlist"]}`}
					onClick={handleAddToWatchlist}
				>
					Add to Watchlist
				</button>
			)}
		</>
	);
};

export default AddToWatchlist;
