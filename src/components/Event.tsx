import React, {useState} from 'react'
import '../styles/Event.css'
import {Application, DatePicker, DateTimePicker} from 'react-rainbow-components'
type EventProps = {}
const theme = {
  rainbow: {
    palette: {
      brand: '#711aeb',
    },
  },
}

const Event: React.FC<EventProps> = () => {
  const [dates, setDates] = useState<any>(new Date())
  return (
    <div className="event-container">
      <div className="event-category-container">
        <p>For</p>
        <div className="event-category">
          <button>Reminder</button>
          <button>Event</button>
        </div>
      </div>
      <div className="event-title">
        <p>Title</p>
        <input type="text" />
      </div>
      <div className="event-date">
        <p>Time and Date</p>
        <Application theme={theme}>
          <DateTimePicker
            value={dates}
            label="DateTimePicker Label"
            onChange={(value) => setDates(value)}
            locale="en"
            hideLabel
          />
        </Application>
      </div>
      <div className="event-location">
        <p>Location</p>
        <input type="text" />
      </div>
    </div>
  )
}

export default Event
