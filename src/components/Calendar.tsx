import React, {useState} from 'react'
import GridCells from './GridCells'
import '../styles/Calendar.css'
import {weekDays} from '../helpers/weekDays'
import Date from './Date'
import TimeCells from './TimeCells'
import WeekFilter from './WeekFilter'
import {dateFormatFilter} from '../helpers/dateFormatFilter'
import moment from 'moment'
import Event from './Event'

const Calendar = () => {
  const [changeWeek, setChangeWeek] = useState(5)
  const hours = Array.from(
    {
      length: 24,
    },
    (_, hour) =>
      moment({
        hour: hour,
        minutes: 0,
      }).format('HH:mm'),
  )
  const {days} = weekDays(changeWeek)
  const filterText = dateFormatFilter(days[0], days[days.length - 1])
  return (
    <div className="calendar-container">
      <WeekFilter
        filterText={filterText}
        changeWeek={changeWeek}
        setChangeWeek={setChangeWeek}
      />

      <div className="calendar-container-content">
        <div className="calendar">
          <div className="calendar-cells-container">
            <div className="calendar-time-container">
              <div className="date-container"></div>
              {hours.map((time) => (
                <div className="calendar-time">
                  <TimeCells time={time} />
                </div>
              ))}
            </div>

            {days.map(({day, weekday}) => (
              <div className="calendar-colums">
                <Date day={day} weekday={weekday} />
                <GridCells hours={hours} />
              </div>
            ))}
          </div>
        </div>
        <div className="calendar-event">
          <Event />
        </div>
      </div>
    </div>
  )
}

export default Calendar
