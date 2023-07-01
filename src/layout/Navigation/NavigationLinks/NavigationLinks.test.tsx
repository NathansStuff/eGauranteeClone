import { render, screen } from '@testing-library/react';

import { NavigationLinks } from './NavigationLinks';

test('NavigationLinks', () => {
  // Arrange
  render(<NavigationLinks />);

  // Act & Assert
  expect(screen.getByTestId('navigationLinks')).toBeInTheDocument();
});
