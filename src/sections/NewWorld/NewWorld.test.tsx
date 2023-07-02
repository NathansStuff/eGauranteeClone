import { render, screen } from '@testing-library/react';

import { NewWorld } from './NewWorld';

describe('NewWorld', () => {
  test('renders without errors', () => {
    render(<NewWorld />);
    expect(screen.getByTestId('NewWorld')).toBeInTheDocument();
  });
});
