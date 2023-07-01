import { Navigation } from '@/layout/Navigation';

export default function Home(): JSX.Element {
  return (
    <main className='bg-bg w-screen h-screen flex flex-col text-primary'>
      <Navigation />
      <p>Homepage</p>
    </main>
  );
}
