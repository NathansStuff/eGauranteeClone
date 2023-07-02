import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { AnimatedNumbers } from '@/components/AnimatedNumbers';

import { MovingCardsImage } from '../MovingCardsImage';
import { partners } from './DRiskLists';

export function DRisk(): JSX.Element {
  return (
    <div className='text-primary flex-center flex-col' data-testid='DRisk'>
      <div className='md:flex md:flex-col md:w-full md:px-10 relative max-w-6xl lg:pt-20'>
        <div className='flex flex-col md:flex-row md:items-center xl:flex-row xl:items-center'>
          <div className='md:w-1/2 md:pr-10 '>
            {/* Title */}
            <h1 className='text-4xl pb-4 md:text-6xl lg:text-7xl md:pt-20' data-testid='DRisk-title'>
              dRisk with <span className='font-bold md:block'>eGaurantee</span>
            </h1>
            {/* Subtitle */}
            <h3 className='text-'>The smart way to guarantee commercial property leases</h3>
            {/* Numbers */}
            <div className='pt-[30rem] md:pt-10 w-full md:flex md:justify-end md:space-x-10 xl:w-auto xl:justify-start text-sm xl:space-x-6 xl:ml-6'>
              <p className='md:w-1/3 lg:w-content lg:text-base'>
                <span className='font-bold text-xl lg:text-4xl'>
                  $<AnimatedNumbers value={100} />
                  m+
                </span>
                <br />
                capital unlocked and counting
              </p>
              <p className='md:w-1/3 lg:w-content lg:text-base'>
                <span className='font-bold text-xl lg:text-4xl'>
                  <AnimatedNumbers value={32} />
                </span>
                <br />
                accepting landlords and growing
              </p>
              <p className='md:w-1/3 lg:w-content lg:text-base'>
                <span className='font-bold text-xl lg:text-4xl'>
                  <AnimatedNumbers value={100} />%
                </span>
                <br />
                digital
              </p>
            </div>
          </div>
          {/* Picture */}
          <div className='md:w-1/2 xl:w-1/3 absolute top-40 left-4 h-96 w-full md:left-1/2 md:top-20 lg:pt-10'>
            <MovingCardsImage />
          </div>
        </div>
      </div>

      {/* Accepted By */}
      <div className='flex-center pt-10 flex-col md:pt-20 lg:flex-row lg:w-full lg:pt-40'>
        <p className='font-bold text-sm md:w-32 md:text-lg lg:w-24 lg:text-sm'>Accepted by</p>
        <div className='pb-8 relative lg:pb-0'>
          <div className='absolute top-0 left-0 h-full w-20 bg-gradient-to-l from-transparent to-white z-40' />
          <div className='absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-40' />
          <div className='flex-center space-x-4 overflow-x-hidden'>
            {partners.map((partner, index) => (
              <div key={index} className='grayscale md:w-20 lg:w-32'>
                <Image
                  src={partner}
                  alt='partner'
                  width={200}
                  height={40}
                  className='object-cover'
                  sizes='(max-width: 640px) 100vw, (max-width: 768px) 75vw, 10vw'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='hidden lg:flex w-content space-x-1'>
          <p className=' font-bold text-sm'>For landlords, Tenants, Intermediaries </p>
          <ArrowDownCircleIcon className='h-5 w-5' data-testid='DRisk-ArrowDownCircleIcon' />
        </div>
      </div>
    </div>
  );
}
