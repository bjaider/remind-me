import React, {useState} from 'react'
import Signin from '../Icon/sign-in'
import '../styles/Login.css'
import Modal from './Modal'

const Login = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="login-container">
      <button
        className="login-signin-button"
        onClick={() => setIsVisible(true)}
      >
        <Signin />
      </button>
      {isVisible && <Modal setIsVisible={setIsVisible} />}
    </div>
  )
}

export default Login
