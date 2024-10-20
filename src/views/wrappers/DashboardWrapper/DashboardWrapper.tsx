import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Bell, ChevronDown, Search } from 'lucide-react';

import Logo from '../../../assets/logo.svg?react'

import Briefcase from '../../../assets/images/sidebar/briefcase.svg?react';
import Home from '../../../assets/images/sidebar/home.svg?react';
import Users from '../../../assets/images/sidebar/user-friends.svg?react';
import Guarantors from '../../../assets/images/sidebar/guarantors.svg?react';
import Sack from '../../../assets/images/sidebar/sack.svg?react';
import Handshake from '../../../assets/images/sidebar/handshake-regular.svg?react';
import PiggyBank from '../../../assets/images/sidebar/piggy-bank.svg?react';
import LoanRequest from '../../../assets/images/sidebar/loan-requests.svg?react';
import Whitelist from '../../../assets/images/sidebar/user-check.svg?react';
import Karma from '../../../assets/images/sidebar/user-times.svg?react';
import Bank from '../../../assets/images/sidebar/bank.svg?react';
import Fees from '../../../assets/images/sidebar/coins-solid.svg?react';
import Transactions from '../../../assets/images/sidebar/transactions.svg?react';
import Service from '../../../assets/images/sidebar/service.svg?react';
import UserCog from '../../../assets/images/sidebar/user-cog.svg?react';
import Scroll from '../../../assets/images/sidebar/scroll.svg?react';
import ChartBar from '../../../assets/images/sidebar/chart-bar.svg?react';
import Sliders from '../../../assets/images/sidebar/sliders-h.svg?react';
import BadgePercent from '../../../assets/images/sidebar/badge-percent.svg?react';
import ClipboardList from '../../../assets/images/sidebar/clipboard-list.svg?react';
import Avatar from '../../../assets/images/sidebar/avatar.svg?react';

import './DashboardWrapper.scss'
import routeNames from '../../../navigation/routeNames';

const sidebarItems = [
  {
    title: '',
    children: [
      {
        icon: Home,
        title: 'Dashboard',
        link: '',
        active: false,
      }
    ]
  },
  {
    title: 'CUSTOMERS',
    children: [
      {
        icon: Users,
        title: 'Users',
        link: '',
        active: true,
      },
      {
        icon: Guarantors,
        title: 'Guarantors',
        link: '',
        active: false,
      },
      {
        icon: Sack,
        title: 'Loans',
        link: '',
        active: false,
      },
      {
        icon: Handshake,
        title: 'Decision Models',
        link: '',
        active: false,
      },
      {
        icon: PiggyBank,
        title: 'Savings',
        link: '',
        active: false,
      },
      {
        icon: LoanRequest,
        title: 'Loan Requests',
        link: '',
        active: false,
      },
      {
        icon: Whitelist,
        title: 'Whitelist',
        link: '',
        active: false,
      },
      {
        icon: Karma,
        title: 'Karma',
        link: '',
        active: false,
      },
    ]
  },
  {
    title: 'BUSINESSES',
    children: [
      {
        icon: Briefcase,
        title: 'Organization',
        link: '',
        active: false,
      },
      {
        icon: LoanRequest,
        title: 'Loan Products',
        link: '',
        active: false,
      },
      {
        icon: Bank,
        title: 'Savings Products',
        link: '',
        active: false,
      },
      {
        icon: Fees,
        title: 'Fees and Charges',
        link: '',
        active: false,
      },
      {
        icon: Transactions,
        title: 'Transactions',
        link: '',
        active: false,
      },
      {
        icon: Service,
        title: 'Services',
        link: '',
        active: false,
      },
      {
        icon: UserCog,
        title: 'Service Account',
        link: '',
        active: false,
      },
      {
        icon: Scroll,
        title: 'Settlements',
        link: '',
        active: false,
      },
      {
        icon: ChartBar,
        title: 'Reports',
        link: '',
        active: false,
      },
    ]
  },
  {
    title: 'SETTINGS',
    children: [
      {
        icon: Sliders,
        title: 'Preferences',
        link: '',
        active: false,
      },
      {
        icon: BadgePercent,
        title: 'Fees and Pricing',
        link: '',
        active: false,
      },
      {
        icon: ClipboardList,
        title: 'Audit Logs',
        link: '',
        active: false,
      },
    ]
  }
]

const DashboardWrapper: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className='app__main-layout'>
      <div className="app__nav">
        <Logo />
        <div className="search-section">
          <div className="search-section-container">
            <input type="text" placeholder='Search for anything' />

            <div className="button-wrapper">
              <div className="button">
                <Search />
              </div>
            </div>
          </div>
        </div>

        <div className="menu-items">
          <div className="nav-item">Docs</div>

          <Bell style={{ color: '#213F7D' }} />

          <div className="account">
            <Avatar className='avatar' />

            <div className="name">Adedeji</div>

            <ChevronDown style={{ color: 'var(--primary-color)', width: '16px' }} />
          </div>
        </div>
      </div>
      <div className="app__dashboar-layout">
        <div className="sidebar">
          <div className="sidebar-item" style={{ marginBottom: '32px', marginTop: '39px' }}>
            <Briefcase />
            <span>Switch Organization</span>
            <ChevronDown style={{ color: '#213F7D' }} />
          </div>

          {sidebarItems.map((section) => (
            <div className="sidebar-section">
              {section.title && <div className="section-title">{section.title}</div>}

              {section.children.map((child) => {
                const Icon = child.icon;
                return (
                  <div onClick={() => navigate(routeNames.users)} className={`sidebar-item ${child.active ? 'active' : ''}`}>
                    <Icon />
                    {child.title}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="main-section">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default DashboardWrapper