// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../../src/data";

export default function handler(req, res) {
	const result = data.find((post) => post.id === parseInt(req.query.id));

	res.status(200).json(result);
}
