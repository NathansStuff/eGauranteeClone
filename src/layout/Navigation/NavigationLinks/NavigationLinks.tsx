'use client';

import { DropdownMenu } from '@/components/DropdownMenu/DropdownMenu';

import { navigationLinksData } from './navigationLinkData';

export function NavigationLinks(): JSX.Element {
  return (
    <div data-testid='navigationLinks'>
      {navigationLinksData.map((link) => (
        <DropdownMenu key={link.title} title={link.title} options={link.options} />
      ))}
    </div>
  );
}
