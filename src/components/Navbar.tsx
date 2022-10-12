import React, {useContext} from 'react'
import {Context} from '../context/ContextProvider'
import SingOut from '../Icon/sing-out'
import '../styles/Navbar.css'
type NavbarProps = {}
const Navbar: React.FC<NavbarProps> = () => {
  const {user, setUser, setEvents}: any = useContext(Context)
  return (
    <div className="navbar-container">
      <h1>RemindMe</h1>
      {user && (
        <button
          onClick={() => {
            window.location.reload()
            localStorage.removeItem('token')
            /* setUser(null) */
            /* setEvents([]) */
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
