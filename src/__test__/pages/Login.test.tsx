import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Login } from '../../views/pages';
import routeNames from '../../navigation/routeNames';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders login component with logo, illustration, and input fields', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Check that logo is rendered
    const logo = screen.getByRole('img', { name: /logo/i });
    expect(logo).toBeInTheDocument();

    // Check that the illustration is rendered
    const illustration = screen.getByRole('img', { name: /pablo-sign-in/i });
    expect(illustration).toBeInTheDocument();

    // Check that email input field is rendered
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();

    // Check that password input field is rendered
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();

    // Check that the login button is rendered
    const loginButton = screen.getByRole('button', { name: /log in/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('navigates to users page on login button click', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Simulate clicking the login button
    const loginButton = screen.getByRole('button', { name: /log in/i });
    fireEvent.click(loginButton);

    // Check that navigate was called with the correct route
    expect(mockNavigate).toHaveBeenCalledWith(routeNames.users);
  });

  test('renders forgot password text', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const forgotPassword = screen.getByText(/Forgot PASSWORD\?/i);
    expect(forgotPassword).toBeInTheDocument();
  });
});
