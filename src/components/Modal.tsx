import React from 'react'
import Close from '../Icon/close'
import '../styles/Modal.css'
type ModalProps = {
  setIsVisible: any
}
const Modal: React.FC<ModalProps> = ({setIsVisible}) => {
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
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
