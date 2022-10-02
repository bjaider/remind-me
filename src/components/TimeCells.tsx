import React from 'react'
import '../styles/TimeCells.css'
type TimeCellsProps = {
  time: string
}
const TimeCells: React.FC<TimeCellsProps> = ({time}) => {
  return (
    <div className="time-cells-container">
      <div>{time}</div>
    </div>
  )
}

export default TimeCells
