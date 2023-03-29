import PropTypes from 'prop-types'
import ClosedCalendar from '../components/calendar-components/ClosedCalendar'
import ClosedJournal from '../components/journal-components/ClosedJournal'
import OpenedCalendar from '../components/calendar-components/OpenedCalendar'
import OpenedJournal from '../components/journal-components/OpenedJournal'
import { useState, useEffect } from 'react'
import WarpButton from '../components/WarpButton'
import Bubbles from '../components/Bubbles'
import { useNavigate } from 'react-router-dom'

const SingleTaskPage = ({ instance, userId, setNotifState, notifState }) => {

    const [journalOpen, setJournalOpen] = useState(false)
    const [calendarOpen, setCalendarOpen] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        if (userId == -1) navigate('/')
    }, [0])

    return (
        <div className='single-task-page' >
            <Bubbles />
            <WarpButton link='/journal' text='Return to Journal' 
                        top={90} left={50} size={15} />
            <div className='calendar-half' onClick={() => setJournalOpen(false)}>
            {calendarOpen ? 
                <OpenedCalendar instance={instance} userId={userId} 
                                setNotifState={setNotifState} notifState={notifState} /> : 
                <ClosedCalendar onOpen={() => setCalendarOpen(true)} />}
            </div>
            <div className='journal-half' onClick={() => setCalendarOpen(false)}>
            {journalOpen ? 
                <OpenedJournal instance={instance} userId={userId} /> : 
                <ClosedJournal onOpen={() => setJournalOpen(true)} />}
            </div>
            <div className='single-task-header'>
                <h1>Dashboard</h1>
            </div>
        </div> 
    )
}

SingleTaskPage.defaultProps = {
    task: 'Task'
}

export default SingleTaskPage