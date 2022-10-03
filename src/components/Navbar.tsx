import React, {useContext} from 'react'
import {Context} from '../context/ContextProvider'
import SingOut from '../Icon/sing-out'
import '../styles/Navbar.css'
type NavbarProps = {}
const Navbar: React.FC<NavbarProps> = () => {
  const {user, setUser}: any = useContext(Context)
  return (
    <div className="navbar-container">
      <h1>RemindMe</h1>
      {user && (
        <button
          onClick={() => {
            setUser(null)
            localStorage.removeItem('token')
          }}
        >
          <SingOut />
          Log out
        </button>
      )}
    </div>
  )
}

export default Navbar
