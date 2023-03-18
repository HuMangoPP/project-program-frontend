
const JournalEntries = ({ journalEntries }) => {
    return (
        <div className='journal-entries-container'>
            <div className='journal-container-header'>
                <h1>Journal Entries</h1>
            </div>
            {journalEntries}
        </div>
    )
}

export default JournalEntries