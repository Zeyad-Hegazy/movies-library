import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";

import Nav from "./components/Nav";

const App = () => {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/search" element={<SearchResult />} />
				<Route path="/movie/:movieId" element={<MovieDetails />} />
				<Route path="/watchlist" element={<Watchlist />} />
			</Routes>
		</div>
	);
};

export default App;
