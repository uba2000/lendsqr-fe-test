import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// import useGetQuery from '../../../queries/useGetQuery'
import { formatNumberWithCommas } from '../../utils/util-number'
import useGetQuery from '../../queries/useGetQuery'
import { User } from '../../views/pages'
// import UserTable from '../../views/components/UserTable/UserTable'

console.log(React);

// Mock the useGetQuery hook
jest.mock('../../queries/useGetQuery')
jest.mock('../../views/components/UserTable/UserTable', () => jest.fn(() => <div>UserTable</div>))
jest.mock('*.svg', () => ({
  ReactComponent: () => <div />,
}));

describe('User Component', () => {
  const mockUsers = [
    { id: '1', status: 'Active' },
    { id: '2', status: 'Inactive' },
    { id: '3', status: 'Active' },
  ]

  const mockSummaryData = {
    users_with_loan: 5000,
    users_with_savings: 3000,
  }

  beforeEach(() => {
    (useGetQuery as jest.Mock).mockImplementation(({ queryKey }) => {
      if (queryKey === 'get-users') {
        return { data: mockUsers }
      }
      if (queryKey === 'get-users-summary') {
        return { data: mockSummaryData }
      }
      return { data: null }
    })
  })

  it('renders the User component correctly', () => {
    render(<User />)

    // Check that the Users summary card displays the correct number of users
    expect(screen.getAllByText('Users')[1]).toBeInTheDocument()
    expect(screen.getByText(`${mockUsers.length}`)).toBeInTheDocument()

    // Check that the Active Users card displays the correct number of active users
    const activeUsers = mockUsers.filter(user => user.status === 'Active').length
    expect(screen.getByText('Active Users')).toBeInTheDocument()
    expect(screen.getByText(`${activeUsers}`)).toBeInTheDocument()

    // Check that the Users with Loans card displays the correct number
    expect(screen.getByText('Users with Loans')).toBeInTheDocument()
    expect(screen.getByText(`${formatNumberWithCommas(mockSummaryData.users_with_loan)}`)).toBeInTheDocument()

    // Check that the Users with Savings card displays the correct number
    expect(screen.getByText('Users with Savings')).toBeInTheDocument()
    expect(screen.getByText(`${formatNumberWithCommas(mockSummaryData.users_with_savings)}`)).toBeInTheDocument()

    // Check if the UserTable component is rendered
    expect(screen.getByText('UserTable')).toBeInTheDocument()
  })
})
