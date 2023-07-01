import { XMarkIcon } from '@heroicons/react/24/outline';

import { Logo } from '@/layout/Logo';

import { NavigationLinks } from '../NavigationLinks';

export function ExpandedNavigation({ onToggle }: { onToggle: () => void }): JSX.Element {
  return (
    <div className='fixed top-0 left-0 w-full h-full z-20 bg-white' data-testid='expandedNavigation'>
      <XMarkIcon
        onClick={onToggle}
        className='h-8 w-8 fixed top-4 right-4 cursor-pointer'
        data-testid='expandedNavigation-xmark'
      />
      <div className='flex flex-col items-center justify-center h-full space-y-4 text-primary'>
        <Logo />
        <NavigationLinks />
      </div>
    </div>
  );
}
