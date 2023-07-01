'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export interface DropdownMenuProps {
  title: string;
  options: {
    title: string;
    link: string;
  }[];
  type?: 'primary';
}

export function DropdownMenu({ title, options, type }: DropdownMenuProps): JSX.Element {
  return (
    <div className='mx-auto flex-center  ' data-testid='DropdownMenu'>
      <div
        className={`group relative cursor-pointer ${
          type === 'primary' ? 'w-min-content' : ''
        } md:w-content md:max-w-40 lg:max-w-56 md:w-content text-center`}
      >
        <div
          className={`flex items-center justify-between  rounded-lg group-hover:rounded-b-none  ${
            type === 'primary' ? 'bg-primary' : 'bg-white'
          }`}
        >
          <a
            className={`md:text-sm lg:text-base menu-hover my-2 text-base text-center w-full ${
              type === 'primary' ? 'text-white px-4' : 'text-primary'
            } font-semibold`}
          >
            {title}
          </a>
          {type !== 'primary' && <ChevronDownIcon className='h-4 w-4 lg:h-8 lg:w-8' />}
        </div>
        <div
          className={`invisible absolute z-50 flex w-full flex-col ${
            type === 'primary' ? 'bg-primary' : 'bg-gray-100'
          } py-1  text-gray-800 shadow-xl group-hover:visible rounded-b-lg`}
        >
          {options.map((option, index) => (
            <Link
              key={index}
              href={option.link}
              passHref
              className={`my-2 block border-b  md:mx-2 ${
                type === 'primary'
                  ? 'border-primary py-1  text-white hover:text-white/80'
                  : 'border-gray-100 py-1  text-primary hover:text-primary/80'
              }`}
            >
              {option.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
