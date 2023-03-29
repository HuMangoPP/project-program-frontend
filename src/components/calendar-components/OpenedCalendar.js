import { useState, useEffect } from "react"
import Calendar from 'react-calendar'
import CalendarEvents from "./CalendarEvents"
import NewCalendarEvent from "./NewCalendarEvent"

const OpenedCalendar = ({ instance, userId, setNotifState, notifState }) => {

    const [calendarForm, setCalendarForm] = useState(false)

    const [calendarEvents, setCalendarEvents] = useState([])

    const [date, setDate] = useState(new Date())

    const handleGetEvents = () => {

        const getEvents = async () => {
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

        getEvents()
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
                    userid: userId,
                    reminderid: reminderId,
                }
            })

            console.log(res)
        }

        deleteEvents()
        handleGetEvents()
    }

    const handleNotifToggle = () => {
        setNotifState(!notifState)
        const toggleNotif = async () => {
            const res = await instance.get('/togglenotifications', {
                params: {
                    userid: userId,
                    notifications: !notifState,
                }
            })

            console.log({
                state: !notifState,
                res: res,
            })
        }

        toggleNotif()
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
                            handleDelete={handleDeleteEvents} 
                            handleToggle={handleNotifToggle}
                            notifState={notifState} />
            {calendarForm ? <NewCalendarEvent   closeForm={() => setCalendarForm(false)}
                                                handleSubmit={handlePostEvents} /> : <div />}
        </div>
    )
}

export default OpenedCalendar