import { screen } from '@testing-library/react';

import { MovingCardsImage } from './MovingCardsImage';

describe('MovingCardsImage', () => {
  it('renders without crashing', () => {
    // Arrange
    MovingCardsImage();
    // Act
    const component = screen.getByTestId('MovingCardsImage');
    // Assert
    expect(component).toBeInTheDocument();
  });
});
