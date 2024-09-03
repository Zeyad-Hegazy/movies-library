import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { TmdbProvider } from "./context/TmdbProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<TmdbProvider>
				<App />
			</TmdbProvider>
		</BrowserRouter>
	</StrictMode>
);
