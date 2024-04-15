import Pagination from '@/app/ui/invoices/pagination';

import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { notFound, usePathname, useRouter, useSearchParams } from 'next/navigation';


import { Pool } from 'pg';
import { TextInput } from '@/app/ui/textInput';
import { HiMagnifyingGlassPlus } from 'react-icons/hi2';

const pool = new Pool({
    user: 'dbuser',
    host: 'localhost',
    database: 'mydb',
    password: 'password',
    port: 3211,
});

const ITEMS_PER_PAGE = 6;

async function fetchInvoicesPages(query: string) {

    try {
        const count = await pool.query(`SELECT COUNT(*)
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
    `);

        const totalPages = Math.ceil(Number(count.rows[ 0 ].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of invoices.');
    }
}

function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <TextInput
            placeholder={placeholder}
            onChange={(e: { target: { value: string; }; }) => handleSearch(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
            Icon={HiMagnifyingGlassPlus}
        />
    );
}


export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {



    const userId = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchInvoicesPages(userId)


    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />

            </div>

            <Table query={userId} currentPage={currentPage} />

            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}