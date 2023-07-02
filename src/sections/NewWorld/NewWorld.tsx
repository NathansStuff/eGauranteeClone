import Image from 'next/image';

export function NewWorld(): JSX.Element {
  return (
    <div className='w-full h-full bg-primary text-white flex flex-col justify-between mb-20' data-testid='NewWorld'>
      <div className='px-10 py-20 bg-primary z-30'>
        {/* Tenants & Landlords */}
        <div className='w-full flex-center text-left'>
          <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 max-w-4xl'>
            <div className='md:w-1/2'>
              <h3 className='font-bold text-secondary text-xl pb-4 md:text-3xl text-left'>Tenants,</h3>
              <p className='md:text-2xl text-left'>are you still tying up cash in a bank gaurantee?</p>
            </div>
            <div className='md:w-1/2'>
              <h3 className='font-bold text-secondary text-xl pb-4 md:text-3xl  text-left'>Landlords,</h3>
              <p className='md:text-2xl text-left'>
                do you still have banks guarantees with insufficient cover, at risk of fraud or payout injunction?
              </p>
            </div>
          </div>
        </div>
        {/* Welcome to new world */}
        <div className=' pt-10 flex-center'>
          <div className='max-w-4xl relative'>
            <div className='absolute -top-5 px-2 text-center w-full z-20 flex-center '>
              <h3 className=' bg-primary px-4  text-3xl md:text-5xl '>Welcome to the new world</h3>
            </div>
            <p className='border-2 border-white rounded-lg  p-4 pt-14 md:p-10'>
              <span className='text-secondary font-bold'>The world has moved on.</span> eGuarantee offers a lease bond
              solution that’s the smart way to guarantee commercial property leases. Landlords enjoy the security
              strength of a bank guarantee, without the inherent risks. For tenants, a small percentage of the bond
              value as a fee replaces the debilitating cash deposit requirement.
            </p>
          </div>
        </div>
      </div>
      {/* Green Line */}
      <div className='bg-white w-full'>
        <Image
          src='https://www.eguarantee.com.au/wp-content/themes/eguarantee/dist/images/8e23cfeb83b9647b21c4d4a3898454f7.svg'
          alt=''
          layout='responsive'
          width={1440}
          height={30}
        />
      </div>
    </div>
  );
}
