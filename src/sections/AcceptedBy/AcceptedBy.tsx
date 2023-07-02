import Image from 'next/image';
import Link from 'next/link';

import { PartnerCard } from '@/components/PartnerCard';

import { acceptingIntermediaries, acceptingLandlords, acceptingLeaseBonds } from './acceptedByData';

export function AcceptedBy(): JSX.Element {
  return (
    <div className='text-primary py-20 px-4 flex-center !text-left'>
      <div className='max-w-3xl flex flex-col space-y-4 '>
        <h3 className='text-2xl md:text-5xl'>
          Accepted by <span className='font-bold '>industry heavyweights</span>
        </h3>
        <p className='text-sm md:text-lg'>
          eGuarantee is already used by some of the biggest names in the commercial property sector and is accepted by
          Dexus, Centuria, Investa and over thirty leading landlords
        </p>
        {/* Landlords */}
        <Link href='/' className='hover:text-secondary font-bold text-sm md:text-right'>
          View all accepting landlords
        </Link>
        <div className='flex flex-wrap space-x-4 space-y-4 justify-center pb-4'>
          {acceptingLandlords.map((landlord, index) => {
            return (
              <div key={index} className={index === 0 ? 'ml-4 mt-4' : ''}>
                <PartnerCard imageLink={landlord} />
              </div>
            );
          })}
        </div>
        {/* Intermediaries */}
        <Link href='/' className='hover:text-secondary font-bold text-sm md:text-right'>
          View all accepting intermediaries
        </Link>
        <div className='flex flex-wrap space-x-4 space-y-4 justify-center'>
          {acceptingIntermediaries.map((landlord, index) => {
            return (
              <div key={index} className={index === 0 ? 'ml-4 mt-4' : ''}>
                <PartnerCard imageLink={landlord} />
              </div>
            );
          })}
        </div>
        {/* Whats more */}
        <div className='flex pt-8 md:space-x-4'>
          <div className='md:flex md:space-x-2'>
            {acceptingLeaseBonds.map((landlord, index) => {
              return (
                <div key={index} className='overflow-hidden w-28 h-5 relative p-10 flex-center'>
                  <Image src={landlord} alt='Partner Logo' fill className='px-4 py-2' />
                </div>
              );
            })}
          </div>
          <p className='text-sm '>
            What’s more, eGuarantee’s lease bond solution is issued by Assetinsure – Australia’s largest provider of
            surety bonds – as agent on behalf of an international insurer backed by a global panel of AA/A- rated S&P
            reinsurers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AcceptedBy;
