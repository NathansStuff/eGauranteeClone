import { Navigation } from '@/layout/Navigation';
import { DRisk } from '@/sections/DRisk';

export default function Home(): JSX.Element {
  return (
    <main className='bg-bg w-full h-screen flex flex-col text-primary '>
      <Navigation />
      <DRisk />
      {/* <AnimatedNumbers value={100} /> */}
    </main>
  );
}
