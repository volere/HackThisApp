import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { type, count } = req.query as { type: string, count: string };
    const delay = type === 'even' ? 2000 : 1000; // Different delays for even and odd counts

    setTimeout(() => {
        res.status(200).json({ result: `Result for ${type} task with count ${count}` });
    }, delay);
}
