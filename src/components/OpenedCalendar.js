import { useState, useEffect } from "react"
import Calendar from 'react-calendar'
import CalendarEvent from "./CalendarEvent"
import CalendarEvents from "./CalendarEvents"
import NewCalendarEvent from "./NewCalendarEvent"

const OpenedCalendar = ({ instance, userId }) => {

    const [calendarForm, setCalendarForm] = useState(false)

    const [calendarEvents, setCalendarEvents] = useState([])

    const handleFetchEvents = () => {

        const fetchEvents = async () => {
            const res = await instance.get('/getreminders', {
                params: {
                    userid: userId
                }
            })

            console.log({
                id: userId,
                data: res.data,
            })

            const events = res.data.ReminderID.map((e, i) => {
                return {
                    title: res.data.Title[i],
                    dateTime: date,
                }
            })

            setCalendarEvents(events)
            
        }

        fetchEvents()
    }

    useEffect(() => {
        handleFetchEvents()
    }, [])

    const [date, setDate] = useState(new Date())

    return (
        <div className='opened-calendar'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <CalendarEvents eventData={calendarEvents} openForm={() => setCalendarForm(!calendarForm)}/>
            {calendarForm ? <NewCalendarEvent closeForm={() => setCalendarForm(!calendarForm)} 
                                              instance={instance} 
                                              fetch={handleFetchEvents}
                                              userId={userId} /> : <div />}
        </div>
    )
}

export default OpenedCalendar