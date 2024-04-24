import { NextRequest, NextResponse } from "next/server";

export const config = {
    runtime: 'experimental-edge',
};

export async function GET(req: NextRequest, { params }: { params: { source: string } }) {
    const source = params.source;
    const delay = Math.random() * 3000; // Random delay between 0 and 3000 milliseconds

    // Use a promise to handle the setTimeout
    await new Promise(resolve => setTimeout(resolve, delay));

    // Return the response after the delay
    return new NextResponse(JSON.stringify({ message: `Response from Source ${source.toUpperCase()}` }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
