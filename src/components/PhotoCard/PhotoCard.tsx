'use client';

import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  imageLink: string;
  altText: string;
  title: string;
  subtitle: string;
  handleClick: () => void;
}

export function PhotoCard({ imageLink, altText, title, subtitle, handleClick }: Props): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };
  return (
    <div
      className='relative h-[420px] w-[250px] rounded-xl  overflow-hidden group cursor-pointer'
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid='PhotoCard'
    >
      <Image
        src={imageLink}
        alt={altText}
        fill
        className='transform transition-transform duration-300 group-hover:scale-105 object-cover rounded-xl'
      />
      <div className='absolute bottom-0 left-0 w-full p-4 text-white text-left z-10'>
        <div className='mb-2 font-bold'>{title}</div>
        <div className='mb-2'>{subtitle}</div>
        <div className='text-lg font-bold text-secondary flex items-center space-x-4'>
          Learn more
          {isHovered ? (
            <div data-testid='PhotoCard-ArrowRightIcon'>
              <ArrowRightIcon className='w-4 h-4 transition-all ease-in-out duration-150' />
            </div>
          ) : (
            <div data-testid='PhotoCard-ChevronRightIcon'>
              <ChevronRightIcon className='w-4 h-4 transition-all ease-in-out duration-150' />{' '}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
