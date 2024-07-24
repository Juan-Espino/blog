import { useState, useEffect, useCallback } from "react";
let logoutTimer;

export const useAuth = () => {
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

	return { token, login, logout, creatorId };
};
