'use client';

import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { Button, EButtonType } from '@/components/Button';

export function NavigationLinks(): JSX.Element {
  const user = false;

  function loginOrLogoutHandler(): void {
    console.log('loginOrLogoutHandler');
  }

  return (
    <>
      <Link href='/finance' data-testid='navigationLinks'>
        Finance
      </Link>
      <Link href='/aboutus'>About Us</Link>
      <Link href='/faqs'>FAQ</Link>
      <Link href='/articles'>Articles</Link>
      {user && (
        <div className='flex-center space-x-2 w-full md:w-[140px]'>
          <UserCircleIcon className='h-8 w-8' />
          <Link href='/profile'>My Account</Link>
        </div>
      )}
      <a href={user ? '/api/auth/logout' : '/api/auth/login'}>
        <Button title={user ? 'Logout' : 'Login'} onClick={loginOrLogoutHandler} type={EButtonType.OUTLINE} />
      </a>
    </>
  );
}
