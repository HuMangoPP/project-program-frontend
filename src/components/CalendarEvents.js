import { BsCalendarPlus } from 'react-icons/bs'
import CalendarEvent from './CalendarEvent'

const CalendarEvents = ({ eventData, openForm }) => {

    let events = []
    for (let i=0; i<eventData.length; i++) {
        let date = eventData[i].dateTime.toLocaleDateString()
        events.push(
            <CalendarEvent title={eventData[i].title}
                           dateTime={date} />
        )
    }

    return (
        <div className='calendar-events-container'>
            <div className='calendar-events-header'>
                <h1>Events</h1>
                <div  className='add-event'>
                    <BsCalendarPlus size={'2em'} onClick={() => openForm()}/>
                </div>
            </div>
            <div className='calendar-events-list'>
                {events}
            </div>
        </div>
    )
}

export default CalendarEvents

