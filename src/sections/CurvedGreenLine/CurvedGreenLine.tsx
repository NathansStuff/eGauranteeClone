import Image from 'next/image';

export function CurvedGreenLine(): JSX.Element {
  return (
    <div className='bg-white w-full'>
      <Image
        src='https://www.eguarantee.com.au/wp-content/themes/eguarantee/dist/images/8e23cfeb83b9647b21c4d4a3898454f7.svg'
        alt=''
        layout='responsive'
        width={1440}
        height={30}
      />
    </div>
  );
}
