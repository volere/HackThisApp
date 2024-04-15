"use client"
import { lusitana } from '@/app/ui/fonts';
import { useState } from 'react';

export default function Page() {
    const [ comment, setComment ] = useState('');
    const [ commentsList, setCommentsList ] = useState([
        'this is good',
        'This is the worst thing ever',
        'I like the indigo ones.'
    ]);

    const handleCommentSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setCommentsList([ ...commentsList, comment ]);
        setComment('');
    };

    return (

        <>
            <h1 className={`${lusitana.className} text-2xl`}>Basic XSS</h1>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

                <form onSubmit={handleCommentSubmit} className="w-full max-w-xl p-4 bg-white rounded shadow-md">
                    <div className="mb-4">
                        <input
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write a comment..."
                            className="w-full p-2 text-sm  text-blue-700 placeholder-black-400 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Post Comment
                    </button>
                </form>
                <ul className="w-full max-w-xl p-4 mt-4 bg-white rounded shadow-md">
                    {commentsList.map((comment, index) => (
                        <li key={index} className="p-2 border-b text-blue-700 border-gray-200 last:border-b-0" dangerouslySetInnerHTML={{ __html: comment }} />
                    ))}
                </ul>
            </div>
        </>
    );
}
