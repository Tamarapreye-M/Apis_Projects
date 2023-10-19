import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<ul className="flex justify-between px-10 py-4">
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				<li>
					<NavLink to={"quote"}>Random</NavLink>
				</li>
				<li>
					<NavLink to={"countries"}>Countries</NavLink>
				</li>
				<li>
					<NavLink to={"images"}>Images</NavLink>
				</li>
				<li>
					<NavLink to={"blog"}>Blog</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
