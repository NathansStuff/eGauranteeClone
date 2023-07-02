import Image from 'next/image';

interface PartnerCardProps {
  imageLink: string;
}

export function PartnerCard({ imageLink }: PartnerCardProps): JSX.Element {
  return (
    <div className='border rounded-xl overflow-hidden w-40 h-20 relative p-10 flex-center grayscale'>
      <Image src={imageLink} alt='Partner Logo' fill className='px-4 py-2' />
    </div>
  );
}

export default PartnerCard;
