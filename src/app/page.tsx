import DropdownMenu from '@/components/DropdownMenu/DropdownMenu';
import { Navigation } from '@/layout/Navigation';

export default function Home(): JSX.Element {
  return (
    <main className='bg-bg w-screen h-screen flex flex-col text-primary'>
      <Navigation />
      <p>Homepage</p>
      <DropdownMenu
        title='Our products'
        options={[
          { title: 'Product 1', link: '/product-1' },
          { title: 'Product 2', link: '/product-2' },
        ]}
      />
    </main>
  );
}
