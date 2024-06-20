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
					<Route path="/" exact element={<MainArticle />} />
					<Route path="/:articleId" exact element={<MainArticle />} />
					<Route path="/new" exact element={<NewArticle />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</main>
		</Router>
	);
};

export default App;
