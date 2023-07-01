'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';

import { DropdownMenu } from '@/components/DropdownMenu';
import { DropdownMenuProps } from '@/components/DropdownMenu/DropdownMenu';

import { GetStartedButton } from '../GetStartedButton';
import { LoginLogoutButton } from '../LoginLogoutButton';
import { navigationLinksData } from '../NavigationLinks';

export function ControlIcons({ onToggle }: { onToggle: () => void }): JSX.Element {
  return (
    <div className='flex-center space-x-4 relative md:w-full' data-testid='controlIcons'>
      <div className='md:hidden h-[2rem]'>
        <Bars3Icon onClick={onToggle} className='h-8 w-8 cursor-pointer' data-testid='Bars3Icon' />
      </div>
      <div className='hidden md:flex items-center space-x-1 justify-between w-full '>
        <div className='hidden lg:block  h-1' />
        <div className='flex-center space-x-2'>
          {navigationLinksData.map((link: DropdownMenuProps) => (
            <DropdownMenu key={link.title} title={link.title} options={link.options} />
          ))}
        </div>
        <div className='flex space-x-2'>
          <LoginLogoutButton />
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
}
