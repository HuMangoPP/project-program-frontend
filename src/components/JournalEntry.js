const JournalEntry = ({ date, text }) => {
    return (
        <div className='journal-entry-card'>
            <h1>{date}</h1>
            <p>{text}</p>
        </div>
    )
}

export default JournalEntry