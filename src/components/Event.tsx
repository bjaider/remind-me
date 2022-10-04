import React, {useState} from 'react'
import '../styles/Event.css'
import {ColorPicker, DateTimePicker} from 'react-rainbow-components'
type EventProps = {}

const Event: React.FC<EventProps> = () => {
  const [dates, setDates] = useState<any>(new Date())
  const [color, setColor] = useState<any>()
  const defaultColors = [
    '#e3aaec',
    '#c3dbf7',
    '#9fd6ff',
    '#9de7da',
    '#9ef0bf',
    '#fef199',
    '#fdd499',
    '#d174e0',
  ]
  return (
    <div className="event-container">
      <div className="event-category-container">
        <p>For</p>
        <div className="event-category">
          <button>Reminder</button>
          <button>Event</button>
        </div>
      </div>
      <div className="event-color-picker">
        <p>Color</p>
        <ColorPicker
          value={color}
          onChange={setColor}
          defaultColors={defaultColors}
          variant="colors-fixed"
        />
      </div>
      <div className="event-title">
        <p>Title</p>
        <input type="text" />
      </div>
      <div className="event-date">
        <p>Time and Date</p>

        <DateTimePicker
          value={dates}
          label="DateTimePicker Label"
          onChange={(value) => setDates(value)}
          locale="en"
          hideLabel
        />
      </div>
      <div className="event-location">
        <p>Location</p>
        <input type="text" />
      </div>
    </div>
  )
}

export default Event
