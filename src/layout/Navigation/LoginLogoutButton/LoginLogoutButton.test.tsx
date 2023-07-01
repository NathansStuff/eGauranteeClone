import { fireEvent, render } from '@testing-library/react';

import LoginLogoutButton from './LoginLogoutButton';

describe('LoginLogoutButton', () => {
  it('toggles the login/logout state on button click', () => {
    // Arrange
    const { getByText } = render(<LoginLogoutButton />);
    const buttonElement = getByText('Login');

    // Act
    fireEvent.click(buttonElement);

    // Assert
    expect(buttonElement.textContent).toBe('Logout');

    // Act
    fireEvent.click(buttonElement);

    // Assert
    expect(buttonElement.textContent).toBe('Login');
  });
});
