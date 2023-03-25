import { BsCalendarPlus } from 'react-icons/bs'

const CalendarEvents = ({ events, openForm }) => {

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

