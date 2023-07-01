import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { KeyboardEvent } from 'react';

export function SearchBar({
  query,
  onSearch,
  onQueryChange,
  onKeyDown,
}: {
  query: string;
  onSearch: () => void;
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}): JSX.Element {
  return (
    <div
      className='w-full flex items-center bg-white border border-primary/50 focus-within:border-primary rounded-full transition-all'
      data-testid='searchBar'
    >
      <input
        className='flex-grow px-4 py-2 outline-none rounded-full focus:border-none border-none'
        type='text'
        placeholder='Search'
        value={query}
        onChange={onQueryChange}
        autoFocus
        onKeyDown={onKeyDown}
        data-testid='searchBar-input'
      />
      <MagnifyingGlassIcon
        className='h-6 w-6 mr-4 cursor-pointer text-primary'
        onClick={onSearch}
        data-testid='searchBar-magnifyingGlass'
      />
    </div>
  );
}
