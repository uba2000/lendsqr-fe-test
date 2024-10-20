import React from 'react'
import { Star } from 'lucide-react'

import UserDetailsAvatar from '../../../assets/images/user/details-avatar.svg?react'

import './UserDetails.scss'

const UserDetails: React.FC = () => {
  return (
    <div className='app__user-details-page'>
      <div className="header-section">
        <h2>
          User Details
        </h2>

        <div className="header-buttons">
          <div className="blacklist">
            Blacklist User
          </div>

          <div className="activate-user">Activate User</div>
        </div>
      </div>

      <div className="details-top-section">
        <div className="basic-details-section">
          <UserDetailsAvatar />

          <div className="details-section">
            <div className="">
              <h3 className="main-text">
                Grace Effiom
              </h3>
              <p className="sub-text-1">LSQFf587g90</p>
            </div>

            <div className="divider" />

            <div className="">
              <h4 className="main-text-2">
                User’s Tier
              </h4>
              <div className="">
                <Star style={{ color: '#E9B200', width: '16px', marginRight: '4px' }} />
                <Star style={{ color: '#E9B200', width: '16px', marginRight: '4px' }} />
                <Star style={{ color: '#E9B200', width: '16px' }} />
              </div>
            </div>

            <div className="divider" />

            <div className="">
              <h3 className="main-text">
                ₦200,000.00
              </h3>
              <p className="sub-text-2">9912345678/Providus Bank</p>
            </div>
          </div>
        </div>

        <div className="tabs">
          <div className="tab active">General Details</div>
          <div className="tab">Documents</div>
          <div className="tab">Bank Details</div>
          <div className="tab">Loans</div>
          <div className="tab">Savings</div>
          <div className="tab">App and System</div>
        </div>
      </div>

      <div className="tab-body-section">
        <div className="section">
          <h4 className='section-title'>
            Personal Information
          </h4>

          <div style={{ columnGap: '100px' }} className="section-row">
            <div className="section-row-item">
              <div className="title">full Name</div>
              <div className="value">Grace Effiom</div>
            </div>
            <div className="section-row-item">
              <div className="title">Phone Number</div>
              <div className="value">07060780922</div>
            </div>
            <div className="section-row-item">
              <div className="title">Email Address</div>
              <div className="value">grace@gmail.com</div>
            </div>
            <div className="section-row-item">
              <div className="title">Bvn</div>
              <div className="value">07060780922</div>
            </div>
            <div className="section-row-item">
              <div className="title">Gender</div>
              <div className="value">Female</div>
            </div>
            <div className="section-row-item">
              <div className="title">Marital status</div>
              <div className="value">Single</div>
            </div>
            <div className="section-row-item">
              <div className="title">Children</div>
              <div className="value">None</div>
            </div>
            <div className="section-row-item">
              <div className="title">Type of residence</div>
              <div className="value">Parent’s Apartment</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <h4 className='section-title'>
            Education and Employment
          </h4>

          <div style={{ columnGap: '100px' }} className="section-row">
            <div className="section-row-item">
              <div className="title">level of education</div>
              <div className="value">B.Sc</div>
            </div>
            <div className="section-row-item">
              <div className="title">employment status</div>
              <div className="value">Employed</div>
            </div>
            <div className="section-row-item">
              <div className="title">sector of employment</div>
              <div className="value">FinTech</div>
            </div>
            <div className="section-row-item">
              <div className="title">Duration of employment</div>
              <div className="value">2 years</div>
            </div>
            <div className="section-row-item">
              <div className="title">office email</div>
              <div className="value">grace@lendsqr.com</div>
            </div>
            <div className="section-row-item">
              <div className="title">Monthly income</div>
              <div className="value">₦200,000.00- ₦400,000.00</div>
            </div>
            <div className="section-row-item">
              <div className="title">loan repayment</div>
              <div className="value">40,000</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <h4 className='section-title'>
            Socials
          </h4>

          <div style={{ columnGap: '100px' }} className="section-row">
            <div className="section-row-item">
              <div className="title">Twitter</div>
              <div className="value">@grace_effiom</div>
            </div>
            <div className="section-row-item">
              <div className="title">Facebook</div>
              <div className="value">Grace Effiom</div>
            </div>
            <div className="section-row-item">
              <div className="title">Instagram</div>
              <div className="value">@grace_effiom</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <h4 className='section-title'>
            Guarantor
          </h4>

          <div style={{ columnGap: '100px' }} className="section-row">
            <div className="section-row-item">
              <div className="title">full Name</div>
              <div className="value">Debby Ogana</div>
            </div>
            <div className="section-row-item">
              <div className="title">Phone Number</div>
              <div className="value">07060780922</div>
            </div>
            <div className="section-row-item">
              <div className="title">Email Address</div>
              <div className="value">debby@gmail.com</div>
            </div>
            <div className="section-row-item">
              <div className="title">Relationship</div>
              <div className="value">Sister</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <h4 className='section-title'>

          </h4>

          <div style={{ columnGap: '100px' }} className="section-row">
            <div className="section-row-item">
              <div className="title">full Name</div>
              <div className="value">Debby Ogana</div>
            </div>
            <div className="section-row-item">
              <div className="title">Phone Number</div>
              <div className="value">07060780922</div>
            </div>
            <div className="section-row-item">
              <div className="title">Email Address</div>
              <div className="value">debby@gmail.com</div>
            </div>
            <div className="section-row-item">
              <div className="title">Relationship</div>
              <div className="value">Sister</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails