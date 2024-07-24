import React, { useState, useCallback, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import MainArticle from "./articles/pages/MainArticle";
import MainHeader from "./articles/components/nav/MainHeader";
import NewArticle from "./articles/pages/NewArticle";
import Footer from "./shared/footer/Footer";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";

const App = () => {
	const { token, login, logout, creatorId } = useAuth();
	let routes;

	if (token) {
		routes = (
			<React.Fragment>
				<Route path="/" exact element={<MainArticle />} />
				<Route path="/:articleId" exact element={<MainArticle />} />
				<Route path="/new" exact element={<NewArticle />} />
				<Route path="*" element={<Navigate to="/" />} />
			</React.Fragment>
		);
	} else {
		routes = (
			<React.Fragment>
				<Route path="/" exact element={<MainArticle />} />
				<Route path="/:articleId" exact element={<MainArticle />} />
				<Route path="*" element={<Navigate to="/" />} />
			</React.Fragment>
		);
	}

	return (
		<AuthContext.Provider
			value={{ loggedIn: !!token, token, creatorId, login, logout }}
		>
			<Router>
				<MainHeader />
				<main>
					<div>
						<Routes>{routes}</Routes>
					</div>
					<Footer />
				</main>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
