import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import useGetQuery from '../../queries/useGetQuery';
import { UserDetails } from '../../views/pages';

console.log(React);

// Mock the useGetQuery hook
jest.mock('../../queries/useGetQuery');
jest.mock('*.svg', () => ({
  ReactComponent: () => <div />,
}));

const mockUsers = [
  {
    id: '123-abc',
    username: 'JohnDoe',
    status: 'Active',
    wallet_balance: 300000,
    bank_number: '1234567890',
    bank_name: 'Bank A',
    phoneNumber: '123456789',
    email: 'john@example.com',
  },
];

describe('UserDetails Component', () => {
  beforeEach(() => {
    (useGetQuery as jest.Mock).mockImplementation(({ queryKey }) => {
      if (queryKey === 'get-users') {
        return { data: mockUsers };
      }
      return { data: null };
    });
  });

  it('renders UserDetails component with correct user data', () => {
    render(
      <MemoryRouter initialEntries={['/user/123-abc']}>
        <Routes>
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if user data is rendered correctly
    expect(screen.getByTestId('main-name-value')).toHaveTextContent('JohnDoe');
    expect(screen.getByTestId('main-short-id')).toHaveTextContent('ABC');
    expect(screen.getByTestId('wallet-balance')).toHaveTextContent('₦300,000');
    expect(screen.getByTestId('bank-details')).toHaveTextContent('1234567890/Bank A');
  });

  it('renders the "Blacklist User" button when user status is Active', () => {
    render(
      <MemoryRouter initialEntries={['/user/123-abc']}>
        <Routes>
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if "Blacklist User" button is displayed
    expect(screen.getByText('Blacklist User')).toBeInTheDocument();
  });

  it('renders personal information section correctly', () => {
    render(
      <MemoryRouter initialEntries={['/users/123-abc']}>
        <Routes>
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if personal information section displays correctly
    expect(screen.getByTestId('personal-info-fullname-value')).toHaveTextContent('JohnDoe');
    expect(screen.getByTestId('personal-info-phone-value')).toHaveTextContent('123456789');
    expect(screen.getByTestId('personal-info-email-value')).toHaveTextContent('john@example.com');
  });
});
