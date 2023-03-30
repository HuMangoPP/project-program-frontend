const NewJournalEntry = ({ closeForm, instance }) => {

    const handleSubmit = e => {
        e.preventDefault()
        const field = document.getElementById('journal-field').value
        
        if (!field) return

        console.log({
            field,
        })
        
        closeForm()
    }

    return (
        <div className='new-journal-entry'>
            <h1>New Entry</h1>
            <div className='new-journal-entry-body'>
                <textarea type='text' 
                          className='journal-field'
                          id='journal-field'></textarea>
            </div>
            <div className='btn-container'>
                <button className='submit-btn' onClick={handleSubmit}>Sign</button>
                <button className='submit-btn' onClick={() => closeForm()}>Close</button>
            </div>
        </div>
    )
}

export default NewJournalEntry