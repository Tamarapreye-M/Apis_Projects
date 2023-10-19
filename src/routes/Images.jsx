import React, { useState, useEffect } from "react";

const Images = () => {
	const [images, setImages] = useState([]);
	// random images
	const requestOne = `https://api.unsplash.com/photos?client_id=${
		import.meta.env.VITE_UNSPLASH_API_KEY
	}`;

	// cars
	const requestTwo = `https://api.unsplash.com/search/photos?page=2&query=expensive-cars&client_id=${
		import.meta.env.VITE_UNSPLASH_API_KEY
	}`;

	useEffect(() => {
		fetch(requestTwo)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setImages(data.results);
			});

		const fetchRandom = async () => {
			const res = await fetch(requestOne);
			const data = await res.json();
			console.log(data);
			setImages((prev) => [...prev, ...data]);
		};
		fetchRandom();
		// fetch(requestOne)
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 		setImages((prev) => [...prev, ...data]);
		// 	});
	}, []);

	console.log(images);

	return (
		<div className=" flex flex-col flex-wrap">
			<header className="bg-[rgba(26,26,26,.7)] py-5 px-2 flex flex-col justify-center text-white">
				<h1 className=" text-center text-4xl"> Fancy Car Gallery</h1>
			</header>
			<div id="img-box" className="flex justify-center flex-wrap gap-5">
				{/* <!-- I will be populating this div with images from my unsplash api call--> */}
				{images.map((each, i) => (
					<div key={i}>
						<img
							src={each.urls.regular}
							alt={each.alt_description}
							className=" w-[600px] h-[500px]"
						/>
					</div>
				))}
			</div>

			<footer className="bg-[rgba(26,26,26,.7)] py-5 px-2 flex flex-col justify-center text-white">
				<p id="footer-text" className=" text-center text-2xl">
					{" "}
					<span className=" underline"> Designed & Developed by :</span>{" "}
					Tamarapreye Michael
				</p>
			</footer>
		</div>
	);
};

export default Images;
