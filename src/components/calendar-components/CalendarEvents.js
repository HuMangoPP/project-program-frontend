import { BsCalendarPlus } from 'react-icons/bs'
import CalendarEvent from './CalendarEvent'

const CalendarEvents = ({ eventData, openForm, handleDelete }) => {

    const events = eventData.map((e, i) => {
        return <CalendarEvent reminder={eventData[i].title}
                            dateTime={eventData[i].dateTime}
                            reminderId={eventData[i].reminderId} 
                            handleDelete={handleDelete} />
    })

    return (
        <div className='calendar-events-container'>
            <div className='calendar-events-header'>
                <h1>Reminders</h1>
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
