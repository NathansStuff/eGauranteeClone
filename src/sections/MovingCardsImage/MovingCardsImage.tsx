import Image from 'next/image';

import { MovingDiv } from '@/components/MovingDiv';

function movingCard(src: string, alt: string, initialDelay: number): JSX.Element {
  return (
    <MovingDiv maximumHeight={10} speedOfMovement={40} delayBetweenMovement={6000} initialDelay={initialDelay}>
      <div className='h-[100px] w-[200px]' data-testid='movingCard'>
        <Image src={src} alt={alt} width={500} height={500} />
      </div>
    </MovingDiv>
  );
}

export function MovingCardsImage(): JSX.Element {
  return (
    <div className='relative py-20' data-testid='MovingCardsImage'>
      <div className='absolute bottom-0 left-0 z-30'>
        {movingCard(
          'https://www.eguarantee.com.au/wp-content/themes/eguarantee/app/assets/images/Lease-Shine.png',
          'eGaurantee',
          0
        )}
      </div>
      <div className='absolute bottom-10 left-10 z-20'>
        {movingCard(
          'https://www.eguarantee.com.au/wp-content/themes/eguarantee/app/assets/images/Incentive-Shine.png',
          'eGaurantee',
          2000
        )}
      </div>
      <div className='absolute bottom-20 left-20 z-10'>
        {movingCard(
          'https://www.eguarantee.com.au/wp-content/themes/eguarantee/app/assets/images/Agreement-Shine.png',
          'eGaurantee',
          4000
        )}
      </div>
      <div className='absolute -bottom-32 left-0 z-0' style={{ transform: 'rotate(0deg)' }}>
        <div className='h-[100px] w-[300px]'>
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
