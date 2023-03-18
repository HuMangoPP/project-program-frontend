
const CalendarEvent = ({ dateTime, title, text }) => {
    return (
        <div className='calendar-event-card'>
            <div className='calendar-event-header'>
                <h1>{title}</h1>
                <p>{dateTime}</p>
            </div>
            <div className='calendar-event-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CalendarEvent