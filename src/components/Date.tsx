import React from 'react'
import '../styles/Date.css'
type DateProps = {
  day: number
  weekday: string
}
const Date: React.FC<DateProps> = ({day, weekday}) => {
  return (
    <div className="date-container">
      <p className="date-weekday">{weekday}</p>
      <p className="date-day">{day}</p>
    </div>
  )
}

export default Date
