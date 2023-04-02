import { useState, useEffect } from "react"
import Calendar from 'react-calendar'
import CalendarEvents from "./CalendarEvents"
import NewCalendarEvent from "./NewCalendarEvent"
import { motion } from 'framer-motion'

const OpenedCalendar = ({ instance, userId, setNotifState, notifState }) => {

    const [calendarForm, setCalendarForm] = useState(false)

    const [calendarEvents, setCalendarEvents] = useState([])

    const [currDate, setDate] = useState(new Date())

    const [hasReminder, setHasReminder] = useState({})

    const handleGetEvents = () => {

        const getEvents = async () => {
            const res = await instance.get('/getreminders', {
                params: {
                    userid: userId,
                    date: currDate.toLocaleDateString(),
                }
            })

            let whichHasReminder = {}
            for (let date of res.data.Date) {
                whichHasReminder[date] = true
            }
            setHasReminder(whichHasReminder)
            
            let events = res.data.ReminderID.map((e, i) => {
                return {
                    title: res.data.Title[i],
                    dateTime: res.data.Date[i],
                    reminderId: e,
                }
            })

            events = events.filter((e, i) => {
                return e.dateTime == currDate.toLocaleDateString()
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
                    date: currDate.toLocaleDateString(),
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
        const newNotifState = (notifState + 1) % 2
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
    }, [currDate])

    return (
        <motion.div className='opened-calendar'
        
        initial={false}
        animate={{ transform: 'translateX(0)', opacity: 1 }}
        exit={{ transform: 'translateX(-100%)', opacity: 0 }}
        transition={{ duration: 1 }}
        >
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={currDate} 
                          tileContent={({ date }) => {
                            const shouldShow = date.toLocaleDateString() in hasReminder
                            return <div 
                                    style={{
                                        display: `${shouldShow ? 'block' : 'none'}`,
                                        backgroundColor: 'var(--lightred)',
                                        height: '.5vw',
                                        width: '.5vw',
                                        position: 'absolute',
                                        transform: 'translate(2.75vw, -2.25vh)',
                                        borderRadius: '50%',
                                    }}
                                    />
                          }} 
                           />
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