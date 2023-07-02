import { fireEvent, render, screen } from '@testing-library/react';

import { GetStartedButton } from './GetStartedButton';

describe('GetStartedButton', () => {
  it('toggles the dropdown menu on click', () => {
    // Arrange
    render(<GetStartedButton />);
    const buttonElement = screen.getByTestId('GetStartedButton-button');
    const menuOptionsContainer = screen.getByTestId('GetStartedButton-options');

    // Assert
    expect(menuOptionsContainer).toHaveClass('hidden');

    // Act
    fireEvent.click(buttonElement);

    // Assert
    expect(menuOptionsContainer).not.toHaveClass('hidden');

    // Act
    fireEvent.click(buttonElement);

    // Assert
    expect(menuOptionsContainer).toHaveClass('hidden');
  });
});
