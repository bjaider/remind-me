import React, {useState, useContext} from 'react'
import {Context} from '../context/ContextProvider'
import Signin from '../Icon/sign-in'
import '../styles/Login.css'
import Modal from './Modal'

const Login = () => {
  const {user}: any = useContext(Context)
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="login-container">
      {user ? (
        <img
          src={
            user?.avatar
              ? user?.avatar
              : 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
          }
          width={48}
          alt="Avatar"
        />
      ) : (
        <>
          <button
            className="login-signin-button"
            onClick={() => setIsVisible(true)}
          >
            <Signin />
          </button>
          {isVisible && <Modal setIsVisible={setIsVisible} />}
        </>
      )}
    </div>
  )
}

export default Login
