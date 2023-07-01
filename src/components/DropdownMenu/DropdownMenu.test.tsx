import { render, screen } from '@testing-library/react';

import { DropdownMenu } from './DropdownMenu';
import { dropdownMenuMocks } from './DropdownMenuMocks';

describe('DropdownMenu', () => {
  function renderDropdownMenu(): void {
    render(<DropdownMenu {...dropdownMenuMocks} />);
  }

  it('renders without crashing', () => {
    // Arrange
    renderDropdownMenu();
    // Act
    const component = screen.getByTestId('DropdownMenu');
    // Assert
    expect(component).toBeInTheDocument();
  });

  it('renders the title correctly', () => {
    // Arrange
    renderDropdownMenu();
    // Act
    const titleElement = screen.getByText(dropdownMenuMocks.title);
    // Assert
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the options correctly', () => {
    // Arrange
    renderDropdownMenu();
    // Check if each option is rendered
    dropdownMenuMocks.options.forEach((option) => {
      // Act
      const optionElement = screen.getByText(option.title);
      // Assert
      expect(optionElement).toBeInTheDocument();
      expect(optionElement.getAttribute('href')).toBe(option.link);
    });
  });
});
