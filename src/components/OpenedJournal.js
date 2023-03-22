import JournalEntries from "./JournalEntries"
import JournalEntry from "./JournalEntry"
import { useState } from 'react'
import NewJournalEntry from "./NewJournalEntry"

const OpenedJournal = () => {

    const [journalForm, setJournalForm] = useState(false)

    let numEntires = 6
    let journalEntries = []
    for (let i=0; i<numEntires; i++) {
        journalEntries.push(<JournalEntry 
            date={`some date ${i}`}
            text={`journal entry text ${i}`} />)
    }

    return (
        <div className='opened-journal'>
            <div className='journal-top-pad'></div>
            <JournalEntries journalEntries={journalEntries} openForm={() => setJournalForm(!journalForm)}/>
            {journalForm ? <NewJournalEntry /> : <div />}
            <div className='journal-bottom-pad'></div>
        </div>
    )
}

export default OpenedJournal