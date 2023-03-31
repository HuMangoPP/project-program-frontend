import { useState, useEffect } from "react"
import Calendar from 'react-calendar'
import CalendarEvents from "./CalendarEvents"
import NewCalendarEvent from "./NewCalendarEvent"
import { motion } from 'framer-motion'

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
        }

        deleteEvents()
        handleGetEvents()
    }

    const handleNotifToggle = () => {
        const newNotifState = !notifState
        setNotifState(newNotifState)
        const toggleNotif = async () => {
            const res = await instance.get('/togglenotifications', {
                params: {
                    userid: userId,
                    notifications: newNotifState,
                }
            })
        }

        toggleNotif()
    }

    useEffect(() => {
        handleGetEvents()
    }, [date])

    return (
        <motion.div className='opened-calendar'
        
        initial={false}
        animate={{ transform: 'translateX(0)', opacity: 1 }}
        exit={{ transform: 'translateX(-100%)', opacity: 0 }}
        transition={{ duration: 1 }}
        >
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <CalendarEvents eventData={calendarEvents} openForm={() => setCalendarForm(true)}
                            handleDelete={handleDeleteEvents} 
                            handleToggle={handleNotifToggle}
                            notifState={notifState} />
            {calendarForm ? <NewCalendarEvent   closeForm={() => setCalendarForm(false)}
                                                handleSubmit={handlePostEvents} /> : <div />}
        </motion.div>
    )
}

export default OpenedCalendar