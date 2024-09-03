import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";

const App = () => {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/" index element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
