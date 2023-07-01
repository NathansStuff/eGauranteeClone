'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';

import { NavigationLinks } from '../NavigationLinks';

export function ControlIcons({ onToggle }: { onToggle: () => void }): JSX.Element {
  return (
    <div className='flex-center space-x-4 relative ' data-testid='controlIcons'>
      <div className='md:hidden h-[2rem]'>
        <Bars3Icon onClick={onToggle} className='h-8 w-8 cursor-pointer' data-testid='Bars3Icon' />
      </div>
      <div className='hidden md:flex-center space-x-4'>
        <NavigationLinks />
      </div>
    </div>
  );
}
