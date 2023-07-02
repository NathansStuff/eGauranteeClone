import { act, render, screen } from '@testing-library/react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

import { AnimatedNumbers } from './AnimatedNumbers';

jest.mock('framer-motion');

let mockIsInView = false;
const mockSet = jest.fn();
const mockOn = jest.fn();

(useInView as jest.Mock).mockImplementation(() => [mockIsInView]);
(useMotionValue as jest.Mock).mockImplementation(() => ({ set: mockSet }));
(useSpring as jest.Mock).mockImplementation(() => ({ on: mockOn }));

describe('AnimatedNumbers', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    mockIsInView = false;
    mockSet.mockClear();
    mockOn.mockClear();
  });

  it('renders the component', () => {
    render(<AnimatedNumbers value={42} />);
    const numberElement = screen.getByTestId('AnimatedNumbers');
    expect(numberElement).toBeInTheDocument();
  });

  it('updates the animated number when in view', async () => {
    mockIsInView = true;

    act(() => {
      render(<AnimatedNumbers value={42} />);
    });

    expect(mockSet).toHaveBeenCalledWith(42);

    act(() => {
      mockOn.mock.calls[0][1](42);
    });

    const numberElement = screen.getByTestId('AnimatedNumbers');
    expect(numberElement.textContent).toBe('42');
  });

  it('does not update the animated number when not in view', () => {
    mockIsInView = false;

    act(() => {
      render(<AnimatedNumbers value={42} />);
    });

    const numberElement = screen.getByTestId('AnimatedNumbers');
    expect(numberElement.textContent).toBe('');
  });
});
