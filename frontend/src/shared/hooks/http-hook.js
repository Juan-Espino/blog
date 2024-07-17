import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	//if elements on screen change mid http request, an error occures
	const activeHttpRequest = useRef([]);

	const sendRequest = useCallback(
		async (url, method = "GET", body = null, headers = {}) => {
			try {
				setIsLoading(true);

				//allows us to abort any http request on unmounting
				//by adding an AbortController to a ref
				const httpAbortCtrl = new AbortController();
				activeHttpRequest.current.push(httpAbortCtrl);

				const response = await fetch(url, {
					method,
					headers,
					body,
					signal: httpAbortCtrl.signal,
				});
				const responseData = await response.json();

				//remove any finished httprequest
				activeHttpRequest.current = activeHttpRequest.current.filter(
					(reqCtrl) => reqCtrl !== httpAbortCtrl
				);

				if (!response.ok) {
					throw new Error(responseData.message);
				}
				setIsLoading(false);

				return responseData;
			} catch (err) {
				setError(err.message);
				setIsLoading(false);

				throw err;
			}
		},
		[]
	);

	const clearError = () => {
		setError(null);
	};

	useEffect(() => {
		//clean up function for when the component using our hook unmounts
		//abort on any active http request
		return () => {
			activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
		};
	}, []);

	return { isLoading, error, sendRequest, clearError };
};
