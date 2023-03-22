import { useState } from "react"
// import FullCalendar, { formatDate } from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import listPlugin from '@fullcalendar/list'
import Calendar from 'react-calendar'
import CalendarEvent from "./CalendarEvent"
import CalendarEvents from "./CalendarEvents"

const OpenedCalendar = () => {

    const [currentEvents, setCurrentEvents] = useState([])
    let numEvents = 5
    let events = []
    for (let i=0; i<numEvents; i++) {
        events.push(<CalendarEvent 
            title={`event ${i}`} 
            text={'optional text'} 
            dateTime={'date and time'} />)
    }

    const [date, setDate] = useState(new Date())

    return (
        <div className='opened-calendar'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <CalendarEvents events={events}/>
        </div>
    )
}

export default OpenedCalendar