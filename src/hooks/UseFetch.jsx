import { useState, useEffect } from "react";

const UseFetch = (url) => {
	const [data, setData] = useState([]);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	// in the use effect, we would be fetching the data but we must provide for errors
	useEffect(() => {
		// we would use the abort controller to abort fetch request when component is unmounting
		const abortCont = new AbortController();

		// set timeout helps us wait a little bit for our fetch
		setTimeout(() => {
			fetch(url, { signal: abortCont.signal })
				.then((res) => {
					if (!res.ok) throw Error("Could not fetch data from that resource");
					return res.json();
				})
				.then((data) => {
					setData(data);
					setIsPending(false);
					setError(null);
				})
				.catch((err) => {
					if (err.name === "AbortError") console.log("Fetch was aborted");
					else {
						setError(err.message);
						setIsPending(false);
					}
				});
		}, 5);

		return () => abortCont.abort();
	}, [url]);

	return { data, isPending, error };
};

export default UseFetch;
