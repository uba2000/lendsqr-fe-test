import React from 'react'

import { InputField } from '../../../components'
import Logo from '../../../../assets/logo.svg?react'
import LoginIllustration from '../../../../assets/images/pablo-sign-in 1.svg?react'
import { useNavigate } from 'react-router-dom'
import routeNames from '../../../../navigation/routeNames'

import './Login.scss'

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='app__login'>
      <div className="app__login-left-side">
        <div className="">
          <Logo />
        </div>

        <LoginIllustration className='illustration' />
      </div>
      <div className="app__login-right-side">
        <div className="form-container">
          <h1>Welcome!</h1>
          <p className='sub-title'>Enter details to login.</p>
          <form>
            <InputField placeholder="Email" value='' onChange={() => { }} />
            <InputField placeholder='Password' value='' onChange={() => { }} type='password' />
            <div className="forgot-password">
              Forgot PASSWORD?
            </div>

            <button className='login-button' onClick={() => navigate(routeNames.users)} type='button'>LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login