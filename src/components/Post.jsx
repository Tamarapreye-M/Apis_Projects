import React from "react";
import { useParams, Link } from "react-router-dom";

const Post = ({ posts }) => {
	const { id } = useParams();
	const post = posts.find((each) => each.id === id);
	console.log(useParams(), posts);
	return (
		<div className=" bg-slate-500 p-4">
			<Link to={`/blog/${id}`}>
				hi
				<h1 className=" text-2xl font-semibold mb-4">{post.title}</h1>
			</Link>
			<p>{post.body}</p>
		</div>
	);
};

export default Post;
