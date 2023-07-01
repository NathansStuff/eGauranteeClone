import { render, screen } from '@testing-library/react';

import { Logo } from './Logo';

test('renders TruckStop logo', () => {
  // Arrange
  render(<Logo />);
  // Act
  // Assert
  expect(screen.getByTestId('logo')).toBeInTheDocument();
});
