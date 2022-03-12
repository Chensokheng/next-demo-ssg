// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../../src/data";

export default function handler(req, res) {
	let result = data.map((post) => {
		return { id: post.id, title: post.title };
	});
	// console.log(req.query);
	result = result
		.slice(parseInt(req.query.offset) || 0, result.length)
		.slice(0, parseInt(req.query.limit) || result.length);

	res.status(200).json(result);
}
