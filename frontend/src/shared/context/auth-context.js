import { createContext } from "react";

export const AuthContext = createContext({
	loggedIn: false,
	token: null,
	creatorId: null,
	login: () => {},
	logout: () => {},
});
