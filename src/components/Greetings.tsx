import React, {useContext} from 'react'
import {Context} from '../context/ContextProvider'
import '../styles/Greetings.css'
const Greetings = () => {
  const {user}: any = useContext(Context)
  return (
    <div className="greetings-container">
      <h3>Hello{user && `, ${user?.name}`}</h3>
      <p>You are doing greate. Keep practicing!</p>
    </div>
  )
}

export default Greetings
