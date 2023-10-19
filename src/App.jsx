import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root.jsx";

import Countries from "./routes/Countries";
import Home from "./routes/Home";
import Images from "./routes/Images";
import Quote from "./routes/Quote";
import Blog from "./routes/Blog";
import AddPost from "./routes/AddPost";
import Post from "./components/Post";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<Home />} />
			<Route path="quote" element={<Quote />} />
			<Route path="countries" element={<Countries />} />
			<Route path="images" element={<Images />} />
			<Route path="blog">
				<Route index element={<Blog />} />
				<Route path="addPost" element={<AddPost />} />
				<Route path=":id" element={<Post />} />
			</Route>
		</Route>
	)
);

// 	[
// 	{
// 		path: "/",
// 		element: <Root />,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home />,
// 			},
// 			{
// 				path: "quote",
// 				element: <Quote />,
// 			},
// 			{
// 				path: "countries",
// 				element: <Countries />,
// 			},
// 			{
// 				path: "images",
// 				element: <Images />,
// 			},
// 			{
// 				path: "blog",
// 				children: [
//				{
// 						index: true,
// 						element: <Blog />,
// 					},

// 					{
// 						path: "addPost",
// 						element: <AddPost />,
// 					},
// 					{
// 						path: ":id",
// 						element: <Post />,
// 					},
// 				],
// 			},
// 		],
// 	},
// ]
function App() {
	return <RouterProvider router={router} />;
}

export default App;
