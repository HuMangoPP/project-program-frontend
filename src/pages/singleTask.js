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
            {calendarOpen ? 
                <OpenedCalendar onClose={() => setCalendarOpen(false)}/> : 
                <ClosedCalendar onOpen={() => setCalendarOpen(true)} />}
            {journalOpen ? 
                <OpenedJournal onClose={() => setJournalOpen(false)}/> : 
                <ClosedJournal onOpen={() => setJournalOpen(true)} />}
            <Header title='' subtitle='Task' link='' />
        </div> 
    )
}

SingleTaskPage.defaultProps = {
    task: 'Task'
}

export default SingleTaskPage