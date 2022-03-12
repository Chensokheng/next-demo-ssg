import React from "react";

export default function index({ posts }) {
	return (
		<div>
			<h1>List of posts</h1>
			{/* <div>
				{posts.map((post, index) => {
					return <h2 key={index}>{post.title}</h2>;
				})}
			</div> */}
		</div>
	);
}
