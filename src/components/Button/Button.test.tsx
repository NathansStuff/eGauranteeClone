import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  function renderButton(): void {
    render(<Button />);
  }
  it('renders without errors', () => {
    // Arrange
    renderButton();
    // Act
    // Assert
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
});
