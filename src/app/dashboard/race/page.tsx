'use client'
import React from 'react';

interface ApiResponse {
    message?: string;
    result?: string;
}

function RaceConditionComponent(): JSX.Element {
    const [ data, setData ] = React.useState<string>('No data yet');
    const [ count, setCount ] = React.useState<number>(0);

    async function fetchData(source: string): Promise<void> {
        console.log(`Fetching data from ${source}...`);
        const response = await fetch(`/api/race/routes/${source}`);
        const jsonData: ApiResponse = await response.json();
        setCount((prevCount) => prevCount + 1);
        setData(`${source} says: ${jsonData.message}`);
        simulateAdditionalTask(count);
    }

    async function simulateAdditionalTask(currentCount: number): Promise<void> {
        const type = currentCount % 2 === 0 ? 'even' : 'odd';
        console.log(`Performing ${type}-count task...`);
        const moreData = await fetch(`/api/race/conditional?type=${type}&count=${currentCount}`);
        const jsonData: ApiResponse = await moreData.json();
        setData(`Task at ${type} count ${currentCount}: ${jsonData.result}`);
    }

    return (
        <div>
            <p>{data}</p>
            <button className="rounded-md border p-2 hover:bg-gray-100" onClick={() => fetchData('1')}>Fetch from Source A</button>
            <button className="rounded-md border p-2 hover:bg-gray-100" onClick={() => fetchData('2')}>Fetch from Source B</button>
            <p>Total fetch count: {count}</p>
        </div>
    );
}

export default RaceConditionComponent;
