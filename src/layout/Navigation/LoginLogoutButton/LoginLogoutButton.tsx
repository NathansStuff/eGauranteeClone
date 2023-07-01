import { UserIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
import { useState } from 'react';

export function LoginLogoutButton(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: replace with auth context

  function handleLoginLogout(): void {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className='flex-center space-x-2 font-semibold text-primary'>
      <UserIcon className='h-6 w-6' />
      {/* <Link href={isLoggedIn ? '/api/auth/logout' : '/api/auth/login'}>{isLoggedIn ? 'Logout' : 'Login'}</Link> */}
      <button onClick={handleLoginLogout}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  );
}

export default LoginLogoutButton;
