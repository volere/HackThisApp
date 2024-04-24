import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const type = url.searchParams.get('type');
    const count = url.searchParams.get('count');

    // Check if type and count parameters exist
    if (!type || !count) {
        return new Response(JSON.stringify({ error: "Missing 'type' or 'count' parameters" }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const delay = type === 'even' ? 2000 : 1000;

    // Using a promise to handle the asynchronous setTimeout function
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ result: `Result for ${type} task with count ${count}` });
        }, delay);
    });

    // Returning the result as a JSON response
    return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}