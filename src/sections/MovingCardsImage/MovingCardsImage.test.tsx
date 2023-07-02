import { render, screen } from '@testing-library/react';

import { MovingCardsImage } from './MovingCardsImage';

describe('MovingCardsImage', () => {
  it('renders without crashing', () => {
    render(<MovingCardsImage />);
    const component = screen.getByTestId('MovingCardsImage');
    expect(component).toBeInTheDocument();
  });

  it('renders all moving cards', () => {
    render(<MovingCardsImage />);
    const movingCardElements = screen.getAllByTestId('movingCard');
    expect(movingCardElements.length).toBe(3);
  });

  it('renders the shadow image with correct source and alt text', () => {
    render(<MovingCardsImage />);
    const shadowImageElement = screen.getByAltText('shadow');
    const expectedSrc =
      '/_next/image?url=https%3A%2F%2Fwww.eguarantee.com.au%2Fwp-content%2Fthemes%2Feguarantee%2Fapp%2Fassets%2Fimages%2Fshadow.png&w=1080&q=75';
    expect(shadowImageElement).toHaveAttribute('src', expectedSrc);
  });
});
