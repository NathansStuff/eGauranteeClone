import { XMarkIcon } from '@heroicons/react/24/solid';

import { DropdownMenu, DropdownMenuProps } from '@/components/DropdownMenu';
import { GetStartedButton } from '@/components/GetStartedButton';
import { Logo } from '@/layout/Logo';

import { LoginLogoutButton } from '../LoginLogoutButton/';
import { navigationLinksData } from '../NavigationLinks';

export function ExpandedNavigation({ onToggle }: { onToggle: () => void }): JSX.Element {
  return (
    <div className='fixed top-0 left-0 w-full h-full z-20 bg-white' data-testid='expandedNavigation'>
      <XMarkIcon
        onClick={onToggle}
        className='h-8 w-8 fixed top-4 right-4 cursor-pointer '
        data-testid='expandedNavigation-xmark'
      />
      <div className='flex flex-col items-center justify-between h-full py-20 text-primary'>
        <div>
          <div className='pb-10'>
            <Logo />
          </div>
          {navigationLinksData.map((link: DropdownMenuProps) => (
            <DropdownMenu key={link.title} title={link.title} options={link.options} />
          ))}
        </div>
        <div className='flex flex-col space-y-4'>
          <LoginLogoutButton />
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
}
