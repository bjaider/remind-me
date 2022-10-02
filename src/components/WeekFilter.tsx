import React from 'react'
import Back from '../Icon/back'
import Next from '../Icon/next'
import '../styles/WeekFilter.css'
type WeekFilterProps = {
  filterText: string
  changeWeek: number
  setChangeWeek: any
}
const WeekFilter: React.FC<WeekFilterProps> = ({
  filterText,
  changeWeek,
  setChangeWeek,
}) => {
  return (
    <div className="week-filter-container">
      <div className="week-filter-buttons">
        <button onClick={() => setChangeWeek(changeWeek - 7)}>
          <Back />
        </button>
        <button onClick={() => setChangeWeek(changeWeek + 7)}>
          <Next />
        </button>
      </div>
      <p>{filterText}</p>
    </div>
  )
}

export default WeekFilter
