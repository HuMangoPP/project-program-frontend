const NewJournalEntry = () => {
    return (
        <div className='new-journal-entry'>
            <h1>New Entry</h1>
            <div className='new-journal-entry-body'>
                <textarea type='text' className='journal-field'></textarea>
            </div>
            <button className='submit-btn'>Sign</button>
        </div>
    )
}

export default NewJournalEntry