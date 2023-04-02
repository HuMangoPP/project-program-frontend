
import ClosedCalendar from '../components/calendar-components/ClosedCalendar'
import ClosedJournal from '../components/journal-components/ClosedJournal'
import OpenedCalendar from '../components/calendar-components/OpenedCalendar'
import OpenedJournal from '../components/journal-components/OpenedJournal'
import { useState, useEffect } from 'react'
import WarpButton from '../components/WarpButton'
import Bubbles from '../components/Bubbles'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const SingleTaskPage = ({ instance, userId, setNotifState, notifState }) => {

    const [journalOpen, setJournalOpen] = useState(false)
    const [calendarOpen, setCalendarOpen] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        if (userId === -1) navigate('/')
    }, [0])

    return (
        <motion.div className='single-task-page' 

            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Bubbles />
            <motion.div className='single-task-header'
            
            initial={{ opacity: 0, transform: 'translate(0, 50vh)' }}
            animate={{ opacity: 1, transform: 'translate(0, 0)' }}
            exit={{ opacity: 0, transform: 'translate(0, -50vh)' }}
            transition={{ duration: 1 }}
            >
                <h1>Dashboard</h1>
            </motion.div>
            <WarpButton link='/journal' text='Return to Journal' 
                        top={80} left={50} size={15} />
            <div className='calendar-half' onClick={() => {
                const el = document.getElementsByClassName('opened-journal')[0]
                if (!el) return
                el.classList.add('journal-animate-close')
                setTimeout(() => {
                    setJournalOpen(false)
                    el.classList.remove('journal-animate-close')
                }, 500)
            }}>
            {calendarOpen ? 
                <OpenedCalendar instance={instance} userId={userId} 
                                setNotifState={setNotifState} notifState={notifState} /> : 
                <ClosedCalendar onOpen={() => setCalendarOpen(true)} />}
            </div>
            <div className='journal-half' onClick={() => {
                const el = document.getElementsByClassName('opened-calendar')[0]
                if (!el) return
                el.classList.add('calendar-animate-close')
                setTimeout(() => {
                    setCalendarOpen(false)
                    el.classList.remove('calendar-animate-close')
                }, 500)
            }}>
            {journalOpen ? 
                <OpenedJournal instance={instance} userId={userId} /> : 
                <ClosedJournal onOpen={() => setJournalOpen(true)} />}
            </div>
        </motion.div> 
    )
}

SingleTaskPage.defaultProps = {
    task: 'Task'
}

export default SingleTaskPage