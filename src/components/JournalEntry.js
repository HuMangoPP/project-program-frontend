const JournalEntry = ({ date, text, habits }) => {

    const habitRibbons = Array.from({length: habits.length}, (e, i) => {
        return 0
    })

    return (
        <div className='journal-entry-card'>
            <h1>{date}</h1>
            <p>{text}</p>
            <h2>Recommendations</h2>
        </div>
    )
}

export default JournalEntry