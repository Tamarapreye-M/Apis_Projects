import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = () => {
	const [quote, setQuote] = useState("");
	const [quotes, setQuotes] = useState([]);
	const [advice, setAdvice] = useState("");

	const fetchAdvice = async () => {
		let response = await fetch("https://api.adviceslip.com/advice");
		let data = await response.json();
		setAdvice(data.slip);
	};
	useEffect(() => {
		fetchAdvice();

		// using axios
		async function getQuotes() {
			// await the axios getting the data from the api
			let response = await axios.get("https://type.fit/api/quotes");
			// instead aof the response.json(), axios puts the json in a general object. The key of the
			// array is data and the value is an array of the data gotten
			let data = response.data.slice(0, -1);
			setQuotes(data);
			setQuote(data[0]);
		}
		getQuotes();
	}, []);

	function changeQuote() {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	}
	function changeAdvice() {
		// fetch again
		fetchAdvice();
	}

	return (
		<div className=" bg-blue-one flex justify-center items-center flex-col h-screen">
			<div className=" rounded-lg bg-blue-three text-center w-[500px] p-6 mb-16">
				<p className=" text-neon-one">Quote #{quotes.indexOf(quote) + 1}</p>
				<p className="text-white my-3">{`"${quote.text}" by ${
					quote.author ? quote.author.slice(0, -10) : "me"
				}`}</p>
				<button onClick={changeQuote}>change quote</button>
			</div>
			<div className=" rounded-lg bg-blue-three text-center w-[500px] p-6">
				<p className=" text-neon-one">Advice #{`${advice.id}`}</p>
				<p className="text-white my-3">{`${advice.advice}`}</p>
				{/* you can fetch straight in onclick but i dont want that */}
				<button onClick={changeAdvice}>change advice</button>
			</div>
		</div>
	);
};

export default Quote;
