import React, {useState, useContext} from 'react'
import {Context} from '../context/ContextProvider'
import {axiosIntance} from '../helpers/axios'
import Close from '../Icon/close'
import '../styles/Modal.css'
type ModalProps = {
  setIsVisible: any
}
const Modal: React.FC<ModalProps> = ({setIsVisible}) => {
  const {setUser}: any = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handlePost = () => {
    const userInfo = {
      email: email,
      password: password,
    }
    const config = {
      method: 'post',
      url: 'auth/login',
      data: userInfo,
    }
    axiosIntance(config)
      .then(function (response) {
        const {data} = response
        console.log('data', data)
        setUser(data.user)
        localStorage.setItem('token', data.token)
        setIsVisible(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-top">
          <p>Login</p>
          <button onClick={() => setIsVisible(false)}>
            <Close />
          </button>
        </div>
        <div className="modal-form">
          <input
            type="text"
            placeholder="Email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <button onClick={() => handlePost()}>Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
