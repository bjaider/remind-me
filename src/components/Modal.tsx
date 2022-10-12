import React, {useState, useContext} from 'react'
import {Context} from '../context/ContextProvider'
import {axiosInstance} from '../helpers/axios'
import Close from '../Icon/close'
import '../styles/Modal.css'
type ModalProps = {
  setIsVisible: any
}
const Modal: React.FC<ModalProps> = ({setIsVisible}) => {
  const {setUser}: any = useContext(Context)
  const [userInfo, setUserInfo] = useState({})
  const [isLogin, setIsLogin] = useState(true)
  const handleSubmit = () => {
    const config = {
      method: 'post',
      url: 'auth/login',
      data: userInfo,
    }
    axiosInstance(config)
      .then(function (response) {
        window.location.reload()
        const {data} = response
        console.log('data', data)
        /* setUser(data.user) */
        localStorage.setItem('token', data.token)
        /* setIsVisible(false) */
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const handleSignUp = () => {
    const config = {
      method: 'post',
      url: 'users',
      data: userInfo,
    }
    axiosInstance(config)
      .then(function (response) {
        setIsLogin(!isLogin)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-top">
          <p>{isLogin ? 'Login' : 'Sign Up'}</p>
          <button onClick={() => setIsVisible(false)}>
            <Close />
          </button>
        </div>
        <div className="modal-form">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              onChange={(e: any) =>
                setUserInfo({...userInfo, name: e.target.value})
              }
            />
          )}
          <input
            type="text"
            placeholder="Email"
            onChange={(e: any) =>
              setUserInfo({...userInfo, email: e.target.value})
            }
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e: any) =>
              setUserInfo({...userInfo, password: e.target.value})
            }
          />
          <div className="modal-button-container">
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Go to Sign Up' : 'Go to Login'}
            </button>
            <button onClick={() => (isLogin ? handleSubmit() : handleSignUp())}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
