import React from 'react'

import UsersSummaryIcon from '../../../assets/images/user/users-summary.svg?react'
import ActiveUsersIcon from '../../../assets/images/user/active-user.svg?react'
import UsersLoansIcon from '../../../assets/images/user/users-loans.svg?react'
import UsersSavingsIcon from '../../../assets/images/user/users-savings.svg?react'
import UserTable from '../../components/UserTable/UserTable'

import './User.scss'

const User: React.FC = () => {
  return (
    <div className='app__user-page'>
      <h2>Users</h2>

      <div className="summary-section">
        <div className="summary-card">
          <UsersSummaryIcon />
          <div className="label">Users</div>
          <div className="value">2,453</div>
        </div>
        <div className="summary-card">
          <ActiveUsersIcon />
          <div className="label">Active Users</div>
          <div className="value">2,453</div>
        </div>
        <div className="summary-card">
          <UsersLoansIcon />
          <div className="label">Users with Loans</div>
          <div className="value">12,453</div>
        </div>
        <div className="summary-card">
          <UsersSavingsIcon />
          <div className="label">Users with Savings</div>
          <div className="value">102,453</div>
        </div>
      </div>

      <div className='table-container'>
        <UserTable />
      </div>
    </div>
  )
}

export default User