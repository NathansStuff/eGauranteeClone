import { render, screen } from '@testing-library/react';

import { clickElement } from '@/utils/testUtils/testUtils';

import { ControlIcons } from './ControlIcons';

test('ControlIcons', () => {
  // Arrange
  const onToggleMock = jest.fn();
  render(<ControlIcons onToggle={onToggleMock} />);

  // Act
  const bars3Icon = screen.getByTestId('Bars3Icon');

  // Assert
  expect(bars3Icon).toBeInTheDocument();

  if (bars3Icon) {
    clickElement(bars3Icon);
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  }
});
