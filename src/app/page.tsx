import { Navigation } from '@/layout/Navigation';
import { DRisk } from '@/sections/DRisk';
import { Insist } from '@/sections/Insist';
import { NewWorld } from '@/sections/NewWorld';

export default function Home(): JSX.Element {
  return (
    <main className='bg-bg w-full h-screen flex flex-col text-primary '>
      <Navigation />
      <DRisk />
      <NewWorld />
      <Insist />
    </main>
  );
}
