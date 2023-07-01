import Image from 'next/image';
import Link from 'next/link';

export function Logo(): JSX.Element {
  return (
    <Link href='/' className='hover:cursor-pointer' data-testid='logo'>
      <Image
        src='https://www.eguarantee.com.au/wp-content/uploads/2022/12/eGuarantee_logo.svg'
        alt='eGuarantee'
        width={200}
        height={100}
      />
    </Link>
  );
}
