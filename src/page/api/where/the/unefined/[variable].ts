import type { NextApiRequest, NextApiResponse } from 'next';

interface UserResponse {
    userId: string;
    username: string;
    email: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<UserResponse | { error: string }>) {
    // Simulating a case where we expect a userId from the query but it's potentially undefined
    const { userId } = req.query as { userId?: string };

    if (!userId) {
        res.status(400).json({ error: "No userId provided" });
        return;
    }

    try {
        // Assume we fetch user details based on userId
        const userData = fetchUserData(userId);  // This function is assumed to exist
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user data" });
    }
}

function fetchUserData(userId: string): UserResponse {
    // Placeholder function that would interact with a database
    if (userId === "123") {
        return {
            userId: "123",
            username: "JohnDoe",
            email: "johndoe@example.com"
        };
    }
    throw new Error("User not found");
}
