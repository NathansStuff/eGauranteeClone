import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MainQuote(): JSX.Element {
  const divStyle = {
    backgroundImage: 'url(https://www.eguarantee.com.au/wp-content/uploads/2023/03/dots-bg-new.png)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'repeat',
  };
  return (
    <div className='w-full px-4 text-primary pb-10 flex-center md:pb-40' style={divStyle}>
      <div className='max-w-4xl text-left'>
        <p className='font-bold text-xl h-20 w-20'>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </p>
        <p className='text-3xl pb-4 pt-10 md:text-5xl'>
          {' '}
          The bank guarantee product fails Australian businesses, landlords and tenants.{' '}
        </p>
        <p className='text-sm md:text-lg'>- Cedric Fuchs, Co-Founder Charter Hall, Co-Founder & Chairman, eGuarantee</p>
      </div>
    </div>
  );
}
