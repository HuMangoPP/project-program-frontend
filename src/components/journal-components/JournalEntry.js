import HabitRibbon from './HabitRibbon'

const JournalEntry = ({ date, text, habits, journalId }) => {

    const habitRibbons = Array.from({length: habits.length}, (e, i) => {
        return <HabitRibbon 
            color={`hsl(${Math.floor(Math.random()*360)}, ${100}%, ${75}%)`}
            text={habits[i]}
        ></HabitRibbon>
    })

    return (
        <div className='journal-entry-card'>
            <h1>{date}</h1>
            <p>{text}</p>
            <h2>Recommendations</h2>
            <div className='habit-collection'>
                {habitRibbons}
            </div>
        </div>
    )
}

export default JournalEntry