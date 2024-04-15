import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const delay = Math.random() * 3000; // Random delay between 0 and 3000 milliseconds
    setTimeout(() => {
        res.status(200).json({ message: "Response from Source B" });
    }, delay);
}
