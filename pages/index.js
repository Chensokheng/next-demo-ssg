import Link from "next/link";
import React, { useState } from "react";

export default function Home({ posts }) {
	const [listOfPost, setListOfPost] = useState(posts);
	const loadMore = async () => {
		const res = await fetch(
			"https://jsonplaceholder.typicode.com/posts?_limit=10&&_start=10"
		);
		const posts = await res.json();
		setListOfPost((value) => [...value, ...posts]);
	};

	return (
		<div>
			<h1>List of posts </h1>
			<div>
				{listOfPost.map((post, index) => {
					return (
						<Link href={`/${post.id}`} key={index} passHref>
							<h2>
								{post.id}.{post.title}
							</h2>
						</Link>
					);
				})}
			</div>
			<button onClick={loadMore}>Load more</button>
		</div>
	);
}

export async function getStaticProps(context) {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=10"
	);
	const posts = await res.json();

	return {
		props: { posts }, // will be passed to the page component as props
	};
}
