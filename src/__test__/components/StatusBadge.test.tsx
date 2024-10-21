import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatusBadge from '../../views/components/UserTable/StatusBadge';
import '@testing-library/jest-dom';

describe('StatusBadge Component', () => {
  it('renders Active status with correct class', () => {
    render(<StatusBadge status="Active" />);

    const badge = screen.getByText('Active');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('status-badge status-active');
  });

  it('renders Pending status with correct class', () => {
    render(<StatusBadge status="Pending" />);

    const badge = screen.getByText('Pending');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('status-badge status-pending');
  });

  it('renders Blacklisted status with correct class', () => {
    render(<StatusBadge status="Blacklisted" />);

    const badge = screen.getByText('Blacklisted');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('status-badge status-blacklisted');
  });

  it('renders Inactive status with correct class', () => {
    render(<StatusBadge status="Inactive" />);

    const badge = screen.getByText('Inactive');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('status-badge status-inactive');
  });

  it('renders an unknown status without any additional class', () => {
    render(<StatusBadge status="Unknown" />);

    const badge = screen.getByText('Unknown');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('status-badge');
    expect(badge).not.toHaveClass('status-active');
    expect(badge).not.toHaveClass('status-pending');
    expect(badge).not.toHaveClass('status-blacklisted');
    expect(badge).not.toHaveClass('status-inactive');
  });
});
