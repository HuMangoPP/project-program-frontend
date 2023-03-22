import { BsCalendarPlus } from 'react-icons/bs'

const CalendarEvents = ({ events }) => {

    return (
        <div className='calendar-events-container'>
            <div className='calendar-events-header'>
                <h1>Events</h1>
                <div  className='add-event'>
                    <BsCalendarPlus size={'2em'}/>
                </div>
            </div>
            {events}
        </div>
    )
}

export default CalendarEvents

