'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export interface DropdownMenuProps {
  title: string;
  options: {
    title: string;
    link: string;
  }[];
}

export function DropdownMenu({ title, options }: DropdownMenuProps): JSX.Element {
  return (
    <div
      className='mx-auto flex h-screen w-full items-center justify-center bg-gray-200 py-20 '
      data-testid='DropdownMenu'
    >
      <div className='group relative cursor-pointer py-2'>
        <div className='flex items-center justify-between space-x-5 bg-white px-4 rounded-lg group-hover:rounded-b-none'>
          <a className='menu-hover my-2 py-2 text-base text-primary lg:mx-4'>{title}</a>
          <ChevronDownIcon className='h-4 w-4' />
        </div>
        <div className='invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible rounded-b-lg'>
          {options.map((option, index) => (
            <Link
              key={index}
              href={option.link}
              passHref
              className='my-2 block border-b border-gray-100 py-1  text-primary hover:text-primary/80 md:mx-2'
            >
              {option.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
