"use client"
import { lusitana } from '@/app/ui/fonts';
import { useState } from 'react';

export default function Page() {

    const LinksList = [
        { src: 'https://portswigger.net/', name: 'PortSwigger' },
        { src: 'https://tryhackme.com/', name: 'Try Hack Me' },
        { src: 'https://www.criticalthinkingpodcast.io/', name: 'Critical Thinking Bug Bounty Podcast' },
        { src: 'https://github.com/A-poc/RedTeam-Tools', name: 'RedTeam-Tools' } ]
    return (

        <>
            <h1 className={`${lusitana.className} text-2xl`}>Resources</h1>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">


                <ul className="w-full max-w-xl p-4 mt-4 bg-white rounded shadow-md">
                    {LinksList.map((link, index) => (
                        <li key={index} className="p-2 border-b text-blue-700 border-gray-200 last:border-b-0">
                            <a href={link.src}>{link.name}</a></li>
                    ))}
                </ul>
            </div>
        </>
    );
}