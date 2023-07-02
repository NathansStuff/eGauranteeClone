import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ITestimonyProps {
  quote: string;
  name: string;
  title: string;
  type: string;
  animation: string;
}

export function Testimony({ quote, name, title, type, animation }: ITestimonyProps): JSX.Element {
  return (
    <div className={`text-white py-10 ${animation}`}>
      <p className='font-bold text-xl h-10 w-10 text-secondary'>
        <FontAwesomeIcon icon={faQuoteLeft} className='h-10 w-10'/>
      </p>
      <p className='pt-10'>{quote}</p>
      <p className='pt-4 text-sm md:text-lg'>
        {name}, <span className='font-bold'>{title}</span> <span className='font-bold text-secondary'> / {type}</span>
      </p>
    </div>
  );
}
