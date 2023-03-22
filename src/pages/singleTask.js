import PropTypes from 'prop-types'
import ClosedCalendar from '../components/ClosedCalendar'
import ClosedJournal from '../components/ClosedJournal'
import OpenedCalendar from '../components/OpenedCalendar'
import OpenedJournal from '../components/OpenedJournal'
import { useState } from 'react'
import Header from '../components/Header'
const SingleTaskPage = ({ task }) => {

    const [journalOpen, setJournalOpen] = useState(false)
    const [calendarOpen, setCalendarOpen] = useState(false)

    return (
        <div className='single-task-page' >
            <div className='calendar-half' onClick={() => setJournalOpen(false)}>
            {calendarOpen ? 
                <OpenedCalendar /> : 
                <ClosedCalendar onOpen={() => setCalendarOpen(true)} />}
            </div>
            <div className='journal-half' onClick={() => setCalendarOpen(false)}>
            {journalOpen ? 
                <OpenedJournal /> : 
                <ClosedJournal onOpen={() => setJournalOpen(true)} />}
            </div>
            <Header title='' subtitle='Task' link='' />
        </div> 
    )
}

SingleTaskPage.defaultProps = {
    task: 'Task'
}

export default SingleTaskPage