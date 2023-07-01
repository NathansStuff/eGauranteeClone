'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { DropdownMenu } from '@/components/DropdownMenu/DropdownMenu';

import { getStartedLinkData } from './getStartedLinkData';

export function GetStartedButton(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div className='md:hidden mx-auto flex-center w-52' data-testid='GetStartedButton'>
        <div ref={dropdownRef} className={`group relative cursor-pointer py-2 w-full md:w-content text-center`}>
          <div
            onClick={(): void => setIsOpen(!isOpen)}
            className={`flex items-center justify-between px-4 bg-primary ${isOpen ? 'rounded-t-lg' : 'rounded-lg'}`}
          >
            <a
              className='menu-hover my-2 py-2 text-base text-center w-full text-white lg:mx-4 font-semibold'
              data-testid='GetStartedButton-button'
            >
              Get Started
            </a>
            <ChevronDownIcon className='h-4 w-4' />
          </div>
          <div
            data-testid='GetStartedButton-options'
            className={`${
              isOpen ? 'flex' : 'hidden'
            } w-full flex-col bg-primary py-1 px-4 text-gray-800 shadow-xl transition-all duration-500 ease-in-out rounded-b-lg `}
          >
            {getStartedLinkData.map((option, index) => (
              <Link
                key={index}
                href={option.link}
                passHref
                className='my-2 block border-b md:mx-2 border-primary py-1 text-white hover:text-white/80'
                data-testid='GetStartedButton-link'
              >
                {option.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='hidden md:block '>
        <DropdownMenu title='Get Started' options={getStartedLinkData} type='primary' />
      </div>
    </div>
  );
}
