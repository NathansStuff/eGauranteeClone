import Image from 'next/image';
import Link from 'next/link';

export function Logo(): JSX.Element {
  return (
    <Link href='/' className='hover:cursor-pointer' data-testid='logo'>
      <div className='w-[200px] h-[100px] md:w-[100px] md:h-[50px] flex-center lg:w-[200px] lg:h-[200px]'>
        <Image
          src='https://www.eguarantee.com.au/wp-content/uploads/2022/12/eGuarantee_logo.svg'
          alt='eGuarantee'
          width={200}
          height={100}
        />
      </div>
    </Link>
  );
}
