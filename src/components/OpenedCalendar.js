import { useState } from "react"
import Calendar from 'react-calendar'
import CalendarEvent from "./CalendarEvent"
import CalendarEvents from "./CalendarEvents"
import NewCalendarEvent from "./NewCalendarEvent"

const OpenedCalendar = ({ instance }) => {

    const [calendarForm, setCalendarForm] = useState(false)

    const [calendarEvents, setCalendarEvents] = useState([])
    let numEvents = 5
    let events = []
    for (let i=0; i<numEvents; i++) {
        events.push(<CalendarEvent 
            title={`event ${i}`} 
            text={'optional text'} 
            dateTime={'date and time'} />)
    }

    const handleFetchEvents = () => {

        const fetchEvents = async () => {
            const res = await instance.get()

            console.log(res)
        }
    }

    const [date, setDate] = useState(new Date())

    return (
        <div className='opened-calendar'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <CalendarEvents events={events} openForm={() => setCalendarForm(!calendarForm)}/>
            {calendarForm ? <NewCalendarEvent closeForm={() => setCalendarForm(!calendarForm)} instance={instance} /> : <div />}
        </div>
    )
}

export default OpenedCalendar