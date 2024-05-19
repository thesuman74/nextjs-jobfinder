import { NextApiRequest, NextApiResponse } from 'next';

const items = [
  { id: 1, name: 'John Doe', profession: 'Developer' },
  { id: 2, name: 'Jane Smith', profession: 'Designer' },
  { id: 3, name: 'Mike Johnson', profession: 'Manager' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;
  return "hello"
  console.log("query",query)


//   if (typeof query !== 'string') {
//     return res.status(400).json({ error: 'Invalid query parameter' });
//   }

//   const results = items.filter(item =>
//     item.name.toLowerCase().includes(query.toLowerCase())

//   );

//   res.status(200).json(results);
}