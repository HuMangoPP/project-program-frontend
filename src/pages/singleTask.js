import PropTypes from 'prop-types'
import ClosedCalendar from '../components/ClosedCalendar'
import ClosedJournal from '../components/ClosedJournal'
import OpenedCalendar from '../components/OpenedCalendar'
import OpenedJournal from '../components/OpenedJournal'
import { useState } from 'react'
import WarpButton from '../components/WarpButton'
const SingleTaskPage = ({ instance, userId }) => {

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
            <div className='single-task-header'>
                <h1>Task</h1>
            </div>
        </div> 
    )
}

SingleTaskPage.defaultProps = {
    task: 'Task'
}

export default SingleTaskPage