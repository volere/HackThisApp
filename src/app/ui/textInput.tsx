'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChangeEvent } from 'react';
import { IconType } from 'react-icons';


interface TextInputProps {
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void; // More specific type instead of 'any'
    defaultValue?: string; // This can be undefined, hence it is marked as optional
    Icon: IconType; // Specify the type for Icon assuming you are using react-icons
}


export const TextInput: React.FC<TextInputProps> = ({ placeholder, onChange, defaultValue, Icon }) => {
    function handleSearch(term: string) {
        console.log(term);
    }
    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    );
}
