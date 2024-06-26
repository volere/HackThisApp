'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


// FOR nextVulns some links will be normail links and others will be bnext/LINKS
//  This is to train the eye to see the differance between page refresh and 


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  //{ name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon, },
  { name: 'Resources', href: '/dashboard/links', icon: UserGroupIcon },
  { name: 'XSS', href: '/dashboard/xss', icon: UserGroupIcon },
  { name: 'REGEXi', href: '/dashboard/regex', icon: UserGroupIcon },
  // { name: 'SQLi', href: '/dashboard/sqli', icon: UserGroupIcon },
  { name: 'Race Condition', href: '/dashboard/race', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>{/**<a>Link Here</a> */}
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2  text-blue-600 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-blue-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
