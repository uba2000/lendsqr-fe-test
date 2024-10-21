import React, { useMemo } from 'react'

import { ReactComponent as UsersSummaryIcon } from '../../../assets/images/user/users-summary.svg'
import { ReactComponent as ActiveUsersIcon } from '../../../assets/images/user/active-user.svg'
import { ReactComponent as UsersLoansIcon } from '../../../assets/images/user/users-loans.svg'
import { ReactComponent as UsersSavingsIcon } from '../../../assets/images/user/users-savings.svg'
import UserTable from '../../components/UserTable/UserTable'
import useGetQuery from '../../../queries/useGetQuery'
import queryKeys from '../../../queries/queryKeys'
import { getUsers as getUsersAPI, getUsersSummaryData as getUsersSummaryDataAPI } from '../../../services/user.service'
import { formatNumberWithCommas } from '../../../utils/util-number'
import { User as UserInterface } from '../../../types/user.types'

import './User.scss'

const User: React.FC = () => {
  const {
    data: users,
  } = useGetQuery({
    apiService: getUsersAPI,
    queryKey: queryKeys.getUsers,
  });

  const {
    data: users_summary,
  } = useGetQuery({
    apiService: getUsersSummaryDataAPI,
    queryKey: queryKeys.getUsersSummary,
  });

  console.log({ users, users_summary });

  const activeUsers = useMemo(() => (users || []).reduce((accumulator: number, current: UserInterface) => {
    return current.status === "Active" ? accumulator + 1 : accumulator;
  }, 0), [users])

  return (
    <div className='app__user-page'>
      <h2>Users</h2>

      <div className="summary-section">
        <div className="summary-card">
          <UsersSummaryIcon />
          <div className="label">Users</div>
          <div className="value">{(users || []).length}</div>
        </div>
        <div className="summary-card">
          <ActiveUsersIcon />
          <div className="label">Active Users</div>
          <div className="value">{activeUsers}</div>
        </div>
        <div className="summary-card">
          <UsersLoansIcon />
          <div className="label">Users with Loans</div>
          <div className="value">{formatNumberWithCommas(users_summary?.users_with_loan || 0)}</div>
        </div>
        <div className="summary-card">
          <UsersSavingsIcon />
          <div className="label">Users with Savings</div>
          <div className="value">{formatNumberWithCommas(users_summary?.users_with_savings || 0)}</div>
        </div>
      </div>

      <div className='table-container'>
        <UserTable data={users || []} />
      </div>
    </div>
  )
}

export default User