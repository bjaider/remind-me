import React, {useEffect, useState, useContext} from 'react'
import '../styles/Calendar.css'
import Event from './Event'
import styled from 'styled-components'
import {WeeklyCalendar, Card} from 'react-rainbow-components'
import {formatDateTime} from '../helpers/formatDateTime'
import {Context} from '../context/ContextProvider'
import {useGetEvents} from '../services/events'

const StyledCard = styled(Card)`
  height: 100%;
  padding: 1rem;
`

const Calendar = () => {
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date())
  const {events, setEvents}: any = useContext(Context)
  const {data} = useGetEvents([events], {
    enabled: !!localStorage.getItem('token'),
  })
  useEffect(() => {
    if (data?.data) {
      const events = data.data.events.map((event: any) => {
        const {startDate, endStart} = formatDateTime(
          event.date,
          event.startTime,
          event.endTime,
        )
        event.startDate = startDate
        event.endDate = endStart
        event.backgroundColor = event.backgroundColor.hex
        return event
      })
      setEvents(events)
    }
  }, [data, setEvents])
  return (
    <div className="calendar-container">
      <div className="calendar-container-content">
        <div className="calendar">
          <StyledCard>
            <WeeklyCalendar
              events={events}
              currentWeek={currentWeek}
              onWeekChange={({week}) => setCurrentWeek(week)}
              onEventClick={(event) => alert(event.title)}
              locale="en"
            />
          </StyledCard>
        </div>
        <div className="calendar-event">
          <Event />
        </div>
      </div>
    </div>
  )
}

export default Calendar
