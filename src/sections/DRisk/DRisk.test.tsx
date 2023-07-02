import { render, screen } from '@testing-library/react';

import { DRisk } from './DRisk';

jest.mock('@/components/AnimatedNumbers', () => ({
  AnimatedNumbers: jest.fn().mockReturnValue(<span>AnimatedNumbers</span>),
}));

jest.mock('../MovingCardsImage', () => ({
  MovingCardsImage: jest.fn().mockReturnValue(<div>MovingCardsImage</div>),
}));

describe('DRisk', () => {
  beforeEach(() => {
    render(<DRisk />);
  });

  it('renders without crashing', () => {
    const component = screen.getByTestId('DRisk');
    expect(component).toBeInTheDocument();
  });

  it('renders the title and subtitle', () => {
    const title = screen.getByTestId('DRisk-title');
    expect(title).toBeInTheDocument();
  });

  it('renders the animated numbers section', () => {
    const animatedNumbers = screen.getAllByText(/AnimatedNumbers/i);
    expect(animatedNumbers.length).toBe(3);
  });

  it('renders the MovingCardsImage component', () => {
    const movingCardsImage = screen.getByText(/MovingCardsImage/i);
    expect(movingCardsImage).toBeInTheDocument();
  });

  it('renders the accepted partners section', () => {
    const acceptedBy = screen.getByText(/Accepted by/i);
    expect(acceptedBy).toBeInTheDocument();

    const partners = screen.getAllByAltText(/partner/i);
    expect(partners.length).toBeGreaterThan(0);

    const arrowIcon = screen.getByTestId('DRisk-ArrowDownCircleIcon');
    expect(arrowIcon).toBeInTheDocument();
  });
});
