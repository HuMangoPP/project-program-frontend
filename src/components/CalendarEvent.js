import { useState } from 'react'

const CalendarEvent = ({ dateTime, title }) => {

    const [strikethrough, setStrikethrough] = useState(false)

    return (
        <div className='calendar-event-card'>
            <div className='calendar-event-header'>
                <h1 onClick={() => setStrikethrough(!strikethrough)}
                    className={`calendar-event-title ${strikethrough ? 'strikethrough' : ''}`}>{title}</h1>
                <p>{dateTime}</p>
            </div>
        </div>
    )
}

export default CalendarEvent