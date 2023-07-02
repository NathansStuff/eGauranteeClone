'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

import { CurvedGreenLine } from '@/sections/CurvedGreenLine';

import { ITestimonyProps, Testimony } from '../Testimony';

interface TestimonialsProps {
  title: string;
  testimonies: ITestimonyProps[];
}

export function Testimonials({ title, testimonies }: TestimonialsProps): JSX.Element {
  const [activeTestimony, setActiveTestimony] = useState(0);
  const [animation, setAnimation] = useState('');

  function handleNextTestimony(): void {
    setAnimation('slide-out');
    setTimeout(() => {
      if (activeTestimony === testimonies.length - 1) {
        setActiveTestimony(0);
      } else {
        setActiveTestimony(activeTestimony + 1);
      }
      setAnimation('slide-in');
    }, 500);
  }

  function handlePreviousTestimony(): void {
    setAnimation('slide-out-right');
    setTimeout(() => {
      if (activeTestimony === 0) {
        setActiveTestimony(testimonies.length - 1);
      } else {
        setActiveTestimony(activeTestimony - 1);
      }
      setAnimation('slide-in-reverse');
    }, 500);
  }

  return (
    <>
      <div className='bg-primary w-full px-4 py-20 text-secondary flex justify-center min-h-[750px] md:min-h-[500px] overflow-hidden'>
        <div className='max-w-4xl relative'>
          <div className='absolute flex-center bg-[#436484] rounded-2xl py-1 space-x-2 right-10 top-12 z-20'>
            <ChevronLeftIcon className='w-6 h-6 text-white' onClick={handlePreviousTestimony} />
            <ChevronRightIcon className='w-6 h-6 text-white' onClick={handleNextTestimony} />
          </div>
          <h3 className='font-bold text-lg md:text-3xl'>Here&apos;s what {title} </h3>
          <Testimony {...testimonies[activeTestimony]} animation={animation} />
        </div>
      </div>
      <CurvedGreenLine />
    </>
  );
}
