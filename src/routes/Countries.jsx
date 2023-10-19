import React from "react";

const Countries = () => {
	return (
		<div>
			<div className="flex">
				<p>Where in the world</p>
				<p>Dark Mode</p>
			</div>
			<div className="container">
				<div>
					<div>
						<input type="text" />
					</div>
					<button>Filter by Region</button>
				</div>
				<div id="display"></div>
			</div>
		</div>
	);
};

export default Countries;
