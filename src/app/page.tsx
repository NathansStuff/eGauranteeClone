import { Navigation } from '@/layout/Navigation';
import { Disruption } from '@/sections/Disruption';
import { DRisk } from '@/sections/DRisk';
import { Insist } from '@/sections/Insist';
import { MainQuote } from '@/sections/MainQuote';
import { NewWorld } from '@/sections/NewWorld';

export default function Home(): JSX.Element {
  return (
    <main className='bg-bg w-full h-screen flex flex-col text-primary '>
      <Navigation />
      <DRisk />
      <NewWorld />
      <Insist />
      <Disruption />
      <MainQuote />
    </main>
  );
}
