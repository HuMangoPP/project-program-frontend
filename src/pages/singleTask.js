import PropTypes from 'prop-types'
import ClosedCalendar from '../components/ClosedCalendar'
import ClosedJournal from '../components/ClosedJournal'
import OpenedCalendar from '../components/OpenedCalendar'
import OpenedJournal from '../components/OpenedJournal'
import { useState } from 'react'
import Header from '../components/Header'
import WarpButton from '../components/WarpButton'
const SingleTaskPage = ({ task }) => {

    const [journalOpen, setJournalOpen] = useState(false)
    const [calendarOpen, setCalendarOpen] = useState(false)

    return (
        <div className='single-task-page' >
            <WarpButton link='/tasks' text='Return to Tasks' 
                        top={90} left={50} size={15} />
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