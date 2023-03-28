import { useState, useEffect } from "react"
import Calendar from 'react-calendar'
import CalendarEvents from "./CalendarEvents"
import NewCalendarEvent from "./NewCalendarEvent"

const OpenedCalendar = ({ instance, userId }) => {

    const [calendarForm, setCalendarForm] = useState(false)

    const [calendarEvents, setCalendarEvents] = useState([])

    const [date, setDate] = useState(new Date())

    const handleGetEvents = () => {

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
                    reminderId: e,
                }
            })

            events = events.filter((e, i) => {
                return e.dateTime == date.toLocaleDateString()
            })

            setCalendarEvents(events)
        }

        fetchEvents()
    }

    const handlePostEvents = () => {
            
        const title = document.getElementById('new-calendar-event-title').value
        if (!title) return

        const postEvent = async () => {
            const res = await instance.get('/addreminder', {
                params: {
                    userid: userId,
                    Title: title,
                    date: date.toLocaleDateString(),
                }
            })
            console.log(res)
    
            handleGetEvents()
    
            setCalendarForm(!calendarForm)
        }

        postEvent()
    }

    const handleDeleteEvents = ({ reminderId }) => {
        const deleteEvents = async () => {
            const res = await instance.get('/deletereminder', {
                params: {
                    userid: `${userId}`,
                    reminderid: `${reminderId}`,
                }
            })

            console.log(res)
        }

        deleteEvents()
        
        handleGetEvents()
    }

    useEffect(() => {
        handleGetEvents()
    }, [date])

    return (
        <div className='opened-calendar'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <CalendarEvents eventData={calendarEvents} openForm={() => setCalendarForm(true)}
                            handleDelete={handleDeleteEvents}/>
            {calendarForm ? <NewCalendarEvent   closeForm={() => setCalendarForm(false)}
                                                handleSubmit={handlePostEvents} /> : <div />}
        </div>
    )
}

export default OpenedCalendar