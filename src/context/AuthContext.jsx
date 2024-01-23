import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
	isAuthenticated: false,
	setIsAuthenticated: () => null,
	logout: () => null,
});

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		// get session from local storage
		const session = JSON.parse(localStorage.getItem('session'));

		// if session exists, set authenticated to true
		if (session) {
			// 1. check if refresh token is valid
			setIsAuthenticated(true);
		}
	}, []);

	const logout = () => {
		// remove session from localstorage
		localStorage.removeItem('session');
		// reset isAuthenticated state
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, setIsAuthenticated, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};
