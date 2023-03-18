import JournalEntries from "./JournalEntries"
import JournalEntry from "./JournalEntry"

const OpenedJournal = ({ onClose }) => {

    let numEntires = 6
    let journalEntries = []
    for (let i=0; i<numEntires; i++) {
        journalEntries.push(<JournalEntry 
            date={`some date ${i}`}
            text={`journal entry text ${i}`} />)
    }

    return (
        <div className='opened-journal' onClick={onClose}>
            <div className='journal-top-pad'></div>
            <JournalEntries journalEntries={journalEntries} />
            <div className='journal-bottom-pad'></div>
        </div>
    )
}

export default OpenedJournal