
const CalendarEvents = ({ events }) => {

    return (
        <div className='calendar-events-container'>
            <div className='calendar-events-header'>
                <h1>Events</h1>
            </div>
            {events}
        </div>
    )
}

export default CalendarEvents

