import { useState, useEffect } from "react"
import Calendar from 'react-calendar'
import CalendarEvent from "./CalendarEvent"
import CalendarEvents from "./CalendarEvents"
import NewCalendarEvent from "./NewCalendarEvent"

const OpenedCalendar = ({ instance, userId }) => {

    const [calendarForm, setCalendarForm] = useState(false)

    const [calendarEvents, setCalendarEvents] = useState([])

    const [date, setDate] = useState(new Date())

    const handleFetchEvents = () => {

        const fetchEvents = async () => {
            const res = await instance.get('/getreminders', {
                params: {
                    userid: userId,
                    date: date.toLocaleDateString(),
                }
            })

            let events = res.data.ReminderID.map((e, i) => {
                return {
                    title: res.data.Title[i],
                    dateTime: res.data.Date[i],
                }
            })

            events = events.filter((e, i) => {
                return e.dateTime == date.toLocaleDateString()
            })

            setCalendarEvents(events)
        }

        fetchEvents()
    }

    useEffect(() => {
        handleFetchEvents()
    }, [date])

    return (
        <div className='opened-calendar'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <CalendarEvents eventData={calendarEvents} openForm={() => setCalendarForm(!calendarForm)}/>
            {calendarForm ? <NewCalendarEvent closeForm={() => setCalendarForm(!calendarForm)} 
                                              instance={instance} 
                                              fetch={handleFetchEvents}
                                              userId={userId}
                                              date={date} /> : <div />}
        </div>
    )
}

export default OpenedCalendar