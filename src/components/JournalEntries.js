import { BsJournalPlus } from 'react-icons/bs'

const JournalEntries = ({ journalEntries, openForm }) => {
    return (
        <div className='journal-entries-container'>
            <div className='journal-container-header'>
                <h1>Journal Entries</h1>
                <div className='add-entry'>
                    <BsJournalPlus size={'2em'} onClick={() => openForm()}/>
                </div>
            </div>
            {journalEntries}
        </div>
    )
}

export default JournalEntries