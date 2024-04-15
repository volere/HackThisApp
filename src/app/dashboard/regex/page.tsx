//@ts-nocheck
'use client'


import { useState } from 'react';

export default function RegexTester() {
    const [ testString, setTestString ] = useState('');
    const [ pattern, setPattern ] = useState('');
    const [ isMatch, setIsMatch ] = useState(null);

    const handleTest = (event) => {
        event.preventDefault();
        try {
            const regex = new RegExp(pattern);
            setIsMatch(regex.test(testString));
        } catch (error) {
            setIsMatch('Error in regex pattern');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleTest} className="w-full max-w-lg p-8 text-blue-600 bg-white rounded shadow-lg">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Test String:</label>
                    <input
                        type="text"
                        value={testString}
                        onChange={(e) => setTestString(e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter string to test"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Regex Pattern:</label>
                    <input
                        type="text"
                        value={pattern}
                        onChange={(e) => setPattern(e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter regex pattern"
                    />
                </div>
                <button type="submit" className="w-full py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Test Regex
                </button>
                {isMatch !== null && (
                    <p className="mt-4 p-4 text-center text-white bg-green-500 rounded">
                        Result: {isMatch.toString()}
                    </p>
                )}
            </form>
        </div>
    );
}