import { Testimonials } from '@/components/Testimonials';

import { businessTestimonies } from './businessTestimoniesData';

export function BusinessTestimonies(): JSX.Element {
  return <Testimonials title='businesses have to say' testimonies={businessTestimonies} />;
}

export default BusinessTestimonies;
