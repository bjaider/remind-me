import React from 'react'
import '../styles/Navbar.css'
type NavbarProps = {}
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="navbar-container">
      <h1>RemindMe</h1>
    </div>
  )
}

export default Navbar
