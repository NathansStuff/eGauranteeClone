import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';

import { clickElement } from '@/utils/testUtils/testUtils';

import { Insist } from './Insist';

jest.mock('next/navigation');

describe('Insist', () => {
  test('renders correctly', () => {
    render(<Insist />);
    const insistElement = screen.getByTestId('Insist');
    expect(insistElement).toBeInTheDocument();
  });

  test('routes correctly when Landlords PhotoCard is clicked', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(<Insist />);
    const landlordsCard = screen.getByText('Landlords');
    clickElement(landlordsCard);
    expect(mockPush).toHaveBeenCalledWith('/landlords');
  });

  test('routes correctly when Tenants PhotoCard is clicked', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(<Insist />);
    const tenantsCard = screen.getByText('Tenants');
    clickElement(tenantsCard);
    expect(mockPush).toHaveBeenCalledWith('/tenants');
  });

  test('routes correctly when Intermediaries PhotoCard is clicked', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    render(<Insist />);
    const intermediariesCard = screen.getByText('Intermediaries');
    clickElement(intermediariesCard);
    expect(mockPush).toHaveBeenCalledWith('/intermediaries');
  });
});
