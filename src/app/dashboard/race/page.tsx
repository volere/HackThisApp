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
        const response = await fetch(`/api/${source}`);
        const jsonData: ApiResponse = await response.json();
        setCount((prevCount) => prevCount + 1);
        setData(`${source} says: ${jsonData.message}`);
        simulateAdditionalTask(count);
    }

    async function simulateAdditionalTask(currentCount: number): Promise<void> {
        const type = currentCount % 2 === 0 ? 'even' : 'odd';
        console.log(`Performing ${type}-count task...`);
        const moreData = await fetch(`/api/additionalTasks?type=${type}&count=${currentCount}`);
        const jsonData: ApiResponse = await moreData.json();
        setData(`Task at ${type} count ${currentCount}: ${jsonData.result}`);
    }

    return (
        <div>
            <p>{data}</p>
            <button onClick={() => fetchData('sourceA')}>Fetch from Source A</button>
            <button onClick={() => fetchData('sourceB')}>Fetch from Source B</button>
            <p>Total fetch count: {count}</p>
        </div>
    );
}

export default RaceConditionComponent;
