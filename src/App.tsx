import React, {useEffect, useContext} from 'react'
import './App.css'
import Calendar from './components/Calendar'
import Greetings from './components/Greetings'
import Login from './components/Login'
import Navbar from './components/Navbar'
import {Context} from './context/ContextProvider'
import {axiosIntance} from './helpers/axios'

function App() {
  const {setUser}: any = useContext(Context)
  useEffect(() => {
    const config = {
      method: 'get',
      url: 'users/user',
    }
    axiosIntance(config)
      .then(function (response) {
        const {data} = response
        console.log(data)
        setUser(data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [setUser])

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
