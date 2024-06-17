import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import MainArticle from "./articles/pages/MainArticle";
import MainHeader from "./articles/components/nav/MainHeader";
import NewArticle from "./articles/pages/NewArticle";

const App = () => {
	return (
		<Router>
			<MainHeader />
			<main>
				<Routes>
					<Route path="/" element={<MainArticle />} />
					<Route path="/new" element={<NewArticle />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</main>
		</Router>
	);
};

export default App;
