'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { TextInput } from './basecomponets/textinput';


export default function Search({ placeholder }: { placeholder: string }) {
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
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get('query')?.toString()}
      Icon={HiMagnifyingGlassPlus}
    />
  );
}