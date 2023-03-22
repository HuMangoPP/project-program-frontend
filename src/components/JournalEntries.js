import { BsJournalPlus } from 'react-icons/bs'

const JournalEntries = ({ journalEntries }) => {
    return (
        <div className='journal-entries-container'>
            <div className='journal-container-header'>
                <h1>Journal Entries</h1>
                <div className='add-entry'>
                    <BsJournalPlus size={'2em'}/>
                </div>
            </div>
            {journalEntries}
        </div>
    )
}

export default JournalEntries