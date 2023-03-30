import { BsJournalPlus } from 'react-icons/bs'
import JournalEntry from './JournalEntry'

const JournalEntries = ({ journalData, handleDelete }) => {

    let journalEntries = Array.from({length: journalData.length}, (e, i) => {
        console.log(journalData[i].habits)
        return <JournalEntry key={`journal-entry-${i}`}
                             date={journalData[i].date}
                             text={journalData[i].entry}
                             habits={journalData[i].habits}
                             journalId={journalData[i].journalId}
                             handleDelete={handleDelete} />
    })

    return (
        <div className='journal-entries-container'>
            <div className='journal-container-header'>
                <h1>Journal Entries</h1>
                <div className='add-entry'>
                    <BsJournalPlus size={'2em'} />
                </div>
            </div>
            <div className='journal-entries-list'>
                {journalEntries}
            </div>
        </div>
    )
}

export default JournalEntries