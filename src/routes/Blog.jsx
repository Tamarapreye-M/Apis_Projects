import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";

const Blog = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((err) => console.log(err.message));
	}, []);
	console.log(posts);
	return (
		<div className=" bg-amber-700 p-8">
			<h1>
				This ia a website that uses the json posts placeholder api to display
				blog posts, get and post blog posts.
			</h1>
			<p>It would have different elements to it. A user will be able to </p>
			<button className=" bg-black text-white py-2 px-8 rounded-lg my-4">
				<Link to={"addPost"}>Add Posts</Link>
			</button>
			<div className=" grid grid-cols-2 gap-4">
				{posts.map((post) => (
					<div key={post.id} className=" bg-slate-500 p-4">
						<Link to={`/blog/${post.id}`}>
							<h1 className=" text-2xl font-semibold mb-4">{post.title}</h1>
						</Link>
						<p>{post.body}</p>
						<Post posts={posts} />
					</div>
					// <Post
					// 	key={post.id}
					// 	id={post.id}
					// 	posts={posts}
					// 	title={post.title}
					// 	body={post.body}
					// />
				))}
			</div>
		</div>
	);
};

export default Blog;
