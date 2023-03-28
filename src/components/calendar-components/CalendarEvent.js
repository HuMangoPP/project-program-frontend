import { useState } from 'react'

const CalendarEvent = ({ dateTime, reminder, reminderId, handleDelete }) => {

    return (
        <div className='calendar-event-card'>
            <div className='calendar-event-header'>
                <h2>{dateTime}</h2>
            </div>
            <div className='calendar-event-text'
                onClick={() => handleDelete({reminderId})}>
                <p>{reminder}</p>
            </div>
        </div>
    )
}

export default CalendarEvent