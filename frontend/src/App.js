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

let logoutTimer;

const App = () => {
	const [token, setToken] = useState(false);
	const [tokenExpirationDate, setTokenExpirationDate] = useState();
	const [creatorId, setCreatorId] = useState(false);

	const login = useCallback((creatorId, token, expirationDate) => {
		setToken(token);
		setCreatorId(creatorId);
		const tokenExpirationDate =
			expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
		setTokenExpirationDate(tokenExpirationDate);
		localStorage.setItem(
			"userData",
			JSON.stringify({
				creatorId,
				token,
				expiration: tokenExpirationDate.toISOString(),
			})
		);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setTokenExpirationDate(null);
		setCreatorId(null);
		localStorage.removeItem("userData");
	}, []);

	useEffect(() => {
		if (token && tokenExpirationDate) {
			const remainingTime =
				tokenExpirationDate.getTime() - new Date().getTime();
			logoutTimer = setTimeout(logout, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, logout, tokenExpirationDate]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (
			storedData &&
			storedData.token &&
			new Date(storedData.expiration) > new Date()
		) {
			login(
				storedData.creatorId,
				storedData.token,
				new Date(storedData.expiration)
			);
		}
	}, [login]);

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
