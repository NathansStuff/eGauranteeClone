import { render, screen } from '@testing-library/react';

import { clickElement, inputTextOnElement, keyDownOnElement } from '@/utils/testUtils/testUtils';

import { SearchBar } from './SearchBar';

test('SearchBar', () => {
  // Arrange
  const onSearch = jest.fn();
  const onQueryChange = jest.fn();
  const onKeyDown = jest.fn();
  render(<SearchBar query='' onSearch={onSearch} onQueryChange={onQueryChange} onKeyDown={onKeyDown} />);

  // Act
  const input = screen.getByTestId('searchBar-input');
  inputTextOnElement(input, 'test');
  keyDownOnElement(input, 'Enter');
  const element = screen.getByTestId('searchBar-magnifyingGlass');
  clickElement(element);

  // Assert
  expect(screen.getByTestId('searchBar')).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(onQueryChange).toHaveBeenCalledTimes(1);
  expect(onKeyDown).toHaveBeenCalledTimes(1);
  expect(onSearch).toHaveBeenCalledTimes(1);
});
