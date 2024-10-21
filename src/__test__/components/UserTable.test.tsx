import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import UserTable from '../../views/components/UserTable/UserTable';
import { User } from '../../types/user.types';
import moment from 'moment';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('UserTable Component', () => {
  const mockData: User[] = [
    {
      id: '1',
      organization: 'Lendsqr',
      username: 'john_doe',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      dateJoined: new Date('2023-10-10T14:48:00.000Z').toISOString(),
      status: 'Active',
      bank_name: 'Lendsqr Bank',
      bank_number: '12345678',
      wallet_balance: 1000,
    },
    {
      id: '2',
      organization: 'Irorun',
      username: 'jane_doe',
      email: 'jane@example.com',
      phoneNumber: '0987654321',
      dateJoined: new Date('2023-10-15T09:30:00.000Z').toISOString(),
      status: 'Inactive',
      bank_name: 'Irorun Bank',
      bank_number: '87654321',
      wallet_balance: 1500,
    },
  ];

  it('renders the UserTable component', () => {
    render(
      <MemoryRouter>
        <UserTable data={mockData} />
      </MemoryRouter>
    );

    // Check if the table headers are rendered correctly
    expect(screen.getByText('ORGANIZATION')).toBeInTheDocument();
    expect(screen.getByText('USERNAME')).toBeInTheDocument();
    expect(screen.getByText('EMAIL')).toBeInTheDocument();
    expect(screen.getByText('PHONE NUMBER')).toBeInTheDocument();
    expect(screen.getByText('DATE JOINED')).toBeInTheDocument();
    expect(screen.getByText('STATUS')).toBeInTheDocument();
  });

  it('displays user data correctly', () => {
    render(
      <MemoryRouter>
        <UserTable data={mockData} />
      </MemoryRouter>
    );

    // Check if user data is displayed
    expect(screen.getByText('Lendsqr')).toBeInTheDocument();
    expect(screen.getByText('john_doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();

    // Format the date as "MMM DD, YYYY hh:mm A"
    const formattedDate = moment(mockData[0].dateJoined).format('MMM DD, YYYY hh:mm A');
    expect(screen.getByText(formattedDate)).toBeInTheDocument();

    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('handles view details click', () => {
    render(
      <MemoryRouter>
        <UserTable data={mockData} />
      </MemoryRouter>
    );

    // Simulate clicking the ellipsis to open the action menu
    fireEvent.click(screen.getAllByRole('button')[0]);

    // Click the 'View Details' option
    fireEvent.click(screen.getByText('View Details'));

    // Ensure the navigate function is called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/users/1');
  });
});
