import { render, screen } from '@testing-library/react';

import { clickElement } from '@/utils/testUtils/testUtils';

import { ExpandedNavigation } from './ExpandedNavigation';

test('ExpandedNavigation', () => {
  // Arrange
  const onToggleMock = jest.fn();
  render(<ExpandedNavigation onToggle={onToggleMock} />);

  // Act
  const expandedNavigation = screen.getByTestId('expandedNavigation');
  const xMarkIcon = screen.getByTestId('expandedNavigation-xmark');
  clickElement(xMarkIcon);

  // Assert
  expect(expandedNavigation).toBeInTheDocument();
  expect(xMarkIcon).toBeInTheDocument();
  expect(onToggleMock).toHaveBeenCalledTimes(1);
});
