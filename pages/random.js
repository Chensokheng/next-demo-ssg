import React from "react";

export default function Random({ post }) {
	return (
		<h1>
			{post.id}
			{post.title}
		</h1>
	);
}

export async function getStaticProps(context) {
	const random = Math.floor(Math.random() * 10);
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${random}`
	);
	const post = await res.json();

	return {
		props: { post },
		revalidate: 1,
	};
}
