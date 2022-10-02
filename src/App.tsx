import React from 'react'
import './App.css'
import Calendar from './components/Calendar'
import Greetings from './components/Greetings'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app-container">
      <div className="left-container">
        <Navbar />
      </div>
      <div className="right-container">
        <div className="top-bar">
          <Greetings />
          <Login />
        </div>

        <Calendar />
      </div>
    </div>
  )
}

export default App
