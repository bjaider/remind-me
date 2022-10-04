import React, {useState, useContext} from 'react'
import '../styles/Event.css'
import {
  Calendar,
  ColorPicker,
  Input,
  TimePicker,
} from 'react-rainbow-components'
import {Context} from '../context/ContextProvider'
import {usePostEvents} from '../services/events'
type EventProps = {}

const Event: React.FC<EventProps> = () => {
  const [event, setEvent] = useState<any>({
    date: new Date(),
    backgroundColor: {
      hex: '#c3dbf7',
    },
    category: 'event',
  })
  const {events, setEvents}: any = useContext(Context)
  const [check, setCheck] = useState(false)
  const defaultColors = [
    '#e3aaec',
    '#c3dbf7',
    '#9fd6ff',
    '#9de7da',
    '#9ef0bf',
    '#fef199',
    '#fdd499',
  ]
  const {mutateAsync} = usePostEvents(setEvents, events, setCheck, setEvent)
  return (
    <div className="event-container">
      <div className="event-category-container">
        <p>For</p>
        <div className="event-category">
          <button
            onClick={() => setEvent({...event, category: 'event'})}
            className={event.category === 'event' ? 'active' : ''}
          >
            Event
          </button>
          <button
            onClick={() => setEvent({...event, category: 'reminder'})}
            className={event.category === 'reminder' ? 'active' : ''}
          >
            Reminder
          </button>
        </div>
      </div>
      <div className="event-color-picker">
        <p>Color</p>
        <ColorPicker
          value={event.backgroundColor}
          onChange={(backgroundColor) => setEvent({...event, backgroundColor})}
          defaultColors={defaultColors}
          variant="colors-fixed"
        />
      </div>
      <div className="event-title">
        <p>Title</p>
        <Input
          value={event.title || ''}
          onChange={(e) => setEvent({...event, title: e.target.value})}
          error={!event.title && check && 'Required'}
        />
      </div>
      <div className="event-date">
        <p>Time and Date</p>
        <Calendar
          id="calendar-3"
          value={event.date}
          onChange={(value) => setEvent({...event, date: value})}
        />

        <div className="event-time-pickers">
          <TimePicker
            value={event.startTime}
            error={!event.startTime && check && 'Required'}
            label="Start time"
            onChange={(value) => setEvent({...event, startTime: value})}
          />
          <TimePicker
            value={event.endTime}
            error={!event.endTime && check && 'Required'}
            label="End time"
            onChange={(value) => setEvent({...event, endTime: value})}
          />
        </div>
      </div>
      <div className="event-location">
        <p>Location</p>
        <Input
          value={event.location || ''}
          onChange={(e) => setEvent({...event, location: e.target.value})}
        />
      </div>
      <button
        className="event-submit"
        onClick={() => {
          setCheck(true)
          mutateAsync(event)
        }}
      >
        Button
      </button>
    </div>
  )
}

export default Event
