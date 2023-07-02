import { CheckIcon } from '@heroicons/react/24/solid';

import { GetStartedButton } from '@/components/GetStartedButton';

import { howItWorksData } from './howItWorksData';

export function HowItWorks(): JSX.Element {
  return (
    <div className='bg-primary py-20 px-4 text-white md:flex md:justify-center md:px-10'>
      <div className='md:flex max-w-4xl'>
        {/* How */}
        <div className='flex flex-col space-y-4 w-full pb-10 md:w-1/2 md:text-left'>
          <h2 className='text-3xl w-full md:text-5xl'>
            How <span className='text-secondary font-bold'>eGaurantee dRisks</span>
          </h2>
          <p className='w-full'>Ready to transform your business?</p>
          <div className='flex justify-start w-full'>
            <GetStartedButton color='secondary' />
          </div>
        </div>
        {/* Points */}
        <div className='flex flex-col justify-center items-center space-y-4 w-full md:w-1/2'>
          {howItWorksData.map((point, index) => (
            <div key={index} className='group flex space-x-4 cursor-pointer'>
              <CheckIcon className='h-5 w-5 text-secondary text-sm flex-shrink-0 mt-1' />
              <p className='text-gray-500 group-hover:text-white'>
                <span className='text-white font-semibold'>{point.title}</span> - {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
