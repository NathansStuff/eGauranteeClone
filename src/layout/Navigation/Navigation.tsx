'use client';

import { useState } from 'react';

import { Logo } from '../Logo';
import { ControlIcons } from './ControlIcons';
import { ExpandedNavigation } from './ExpandedNavigation';

export function Navigation(): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded(): void {
    setExpanded((prev) => !prev);
  }

  return (
    <nav className='md:shadow-none mb-0 sticky -top-1 left-0 bg-bg shadow-3xl z-[100] py-4' data-testid='navigation'>
      <div className='flex justify-between items-center pt-2 pb-4 px-4 md:px-20 h-12 mt-2  md:justify-between relative mx-auto max-w-[90rem] '>
        <Logo />
        <ControlIcons onToggle={toggleExpanded} />
      </div>
      {expanded && <ExpandedNavigation onToggle={toggleExpanded} />}
    </nav>
  );
}
