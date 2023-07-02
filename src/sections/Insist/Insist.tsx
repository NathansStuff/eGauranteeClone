'use client';

import { useRouter } from 'next/navigation';

import { PhotoCard } from '@/components/PhotoCard';

export function Insist(): JSX.Element {
  const router = useRouter();

  function handleClick(path: string): void {
    router.push(path);
  }

  return (
    <div className='pt-10 pb-10 px-4 ' data-testid='Insist'>
      <div className=' pt-10 flex-center'>
        <div className='max-w-4xl relative'>
          <div className='absolute -top-5 px-2 text-center w-full z-20 flex-center '>
            <h3 className=' bg-white text-primary px-4  text-3xl '>Everybody wins with eGuarantee</h3>
          </div>
          <div className='border-2 border-primary rounded-lg  p-4 pt-14 md:p-10 flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10 '>
            <div className='md:pt-4 lg:pt-0'>
              <PhotoCard
                imageLink='https://www.eguarantee.com.au/wp-content/uploads/2022/12/businessman-backview.jpeg'
                altText='Businessman Backview'
                title='Landlords'
                subtitle='dRisk your tenant position'
                handleClick={(): void => handleClick('/landlords')}
              />
            </div>
            <PhotoCard
              imageLink='https://www.eguarantee.com.au/wp-content/uploads/2022/12/teamwork-business-meeting.jpeg'
              altText='Businessman Backview'
              title='Tenants'
              subtitle='dRisk your business cashflow'
              handleClick={(): void => handleClick('/tenants')}
            />
            <PhotoCard
              imageLink='https://www.eguarantee.com.au/wp-content/uploads/2022/12/cheerful-businesswoman.jpeg'
              altText='Client Meeting'
              title='Intermediaries'
              subtitle='dRisk your deals'
              handleClick={(): void => handleClick('/intermediaries')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
