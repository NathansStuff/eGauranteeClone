'use client';

import { AnimatedNumbers } from '@/components/AnimatedNumbers/AnimatedNumbers';

import { MovingCardsImage } from '../MovingCardsImage';

export function DRisk(): JSX.Element {
  return (
    <div className='text-primary'>
      {/* Title */}
      <h1 className='text-4xl pb-4'>
        dRisk with <span className='font-bold'>eGaurantee</span>
      </h1>{' '}
      {/* Subtitle */}
      <h3 className='text-'>The smart way to gaurantee commercial property leases</h3>
      {/* Picture */}
      <MovingCardsImage />
      {/* Numbers */}
      <div className='pt-60 w-full flex-center flex-col space-y-2 text-sm'>
        <p className=''>
          <span className='font-bold text-xl'>
            $<AnimatedNumbers value={100} />
            m+
          </span>
          <br />
          capital unlocked and counting
        </p>
        <p className=''>
          <span className='font-bold text-xl'>
            <AnimatedNumbers value={32} />
          </span>
          <br />
          accepting landlords and growing
        </p>
        <p className=''>
          <span className='font-bold text-xl'>
            <AnimatedNumbers value={100} />%
          </span>
          <br />
          digital
        </p>
      </div>
      {/* Accepted By */}
      <div className='flex-center pt-10'>
        <p className='font-bold text-sm'>Accepted by</p>
      </div>
    </div>
  );
}
