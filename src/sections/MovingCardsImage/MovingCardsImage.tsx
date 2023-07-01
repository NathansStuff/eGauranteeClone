import Image from 'next/image';

import { MovingDiv } from '@/components/MovingDiv';

export function MovingCardsImage(): JSX.Element {
  return (
    <div className='relative py-20' data-testid='MovingCardsImage'>
      <div className='absolute bottom-0 left-0 z-30'>
        <MovingDiv maximumHeight={10} speedOfMovement={40} delayBetweenMovement={6000}>
          <div className='h-[100px] w-[200px] '>
            <Image
              src='https://www.eguarantee.com.au/wp-content/themes/eguarantee/app/assets/images/Lease-Shine.png'
              alt='eGaurantee'
              width={500}
              height={500}
            />
          </div>
        </MovingDiv>
      </div>
      <div className='absolute bottom-10 left-10 z-20'>
        <MovingDiv maximumHeight={10} speedOfMovement={40} delayBetweenMovement={6000} initialDelay={2000}>
          <div className='h-[100px] w-[200px] '>
            <Image
              src='https://www.eguarantee.com.au/wp-content/themes/eguarantee/app/assets/images/Incentive-Shine.png'
              alt='eGaurantee'
              width={500}
              height={500}
            />
          </div>
        </MovingDiv>
      </div>{' '}
      <div className='absolute bottom-20 left-20 z-10'>
        <MovingDiv maximumHeight={10} speedOfMovement={40} delayBetweenMovement={6000} initialDelay={4000}>
          <div className='h-[100px] w-[200px] '>
            <Image
              src='https://www.eguarantee.com.au/wp-content/themes/eguarantee/app/assets/images/Agreement-Shine.png'
              alt='eGaurantee'
              width={500}
              height={500}
            />
          </div>
        </MovingDiv>
      </div>
      <div className='absolute -bottom-32 left-0 z-0' style={{ transform: 'rotate(0deg)' }}>
        <div className='h-[100px] w-[300px] '>
          <Image
            src='https://www.eguarantee.com.au/wp-content/themes/eguarantee/app/assets/images/shadow.png'
            alt='shadow'
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
