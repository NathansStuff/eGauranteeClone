'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { DropdownMenu } from '@/components/DropdownMenu/DropdownMenu';

import { getStartedLinkData } from './getStartedLinkData';

interface GetStartedButtonProps {
  color?: 'primary' | 'secondary';
}

export function GetStartedButton({ color = 'primary' }: GetStartedButtonProps): JSX.Element {
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

  const buttonColorClass = color === 'secondary' ? 'bg-secondary' : 'bg-primary';
  const optionsColorClass = color === 'secondary' ? 'text-primary' : 'text-white';

  return (
    <div>
      <div className={` mx-auto flex-center w-52 ${color === 'primary' && 'md:hidden'}`} data-testid='GetStartedButton'>
        <div ref={dropdownRef} className={`group relative cursor-pointer py-2 w-full md:w-content text-center`}>
          <div
            onClick={(): void => setIsOpen(!isOpen)}
            className={`flex items-center justify-between px-4 ${buttonColorClass} ${
              isOpen ? 'rounded-t-lg' : 'rounded-lg'
            }`}
          >
            <a
              className={`menu-hover my-2 py-2 text-base text-center w-full ${optionsColorClass} lg:mx-4 font-semibold`}
              data-testid='GetStartedButton-button'
            >
              Get Started
            </a>
            <ChevronDownIcon className={`h-4 w-4 lg:h-8 lg:w-8 ${optionsColorClass}`} />
          </div>
          <div
            data-testid='GetStartedButton-options'
            className={`${
              isOpen ? 'flex' : 'hidden'
            } w-full flex-col ${buttonColorClass} py-1 px-4 text-gray-800 shadow-xl transition-all duration-500 ease-in-out rounded-b-lg `}
          >
            {getStartedLinkData.map((option, index) => (
              <Link
                key={index}
                href={option.link}
                passHref
                className={`my-2 block border-b md:mx-2 border-primary py-1 ${optionsColorClass} hover:${optionsColorClass}/80`}
                data-testid='GetStartedButton-link'
              >
                {option.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {color === 'primary' && (
        <div className='hidden md:block '>
          <DropdownMenu title='Get Started' options={getStartedLinkData} type='primary' />
        </div>
      )}
    </div>
  );
}
