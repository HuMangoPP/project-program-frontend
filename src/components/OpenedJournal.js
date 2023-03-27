import JournalEntries from "./JournalEntries"
import JournalEntry from "./JournalEntry"
import { useState, useEffect } from 'react'
import NewJournalEntry from "./NewJournalEntry"

const OpenedJournal = ({ instance, userId }) => {

    const [journalForm, setJournalForm] = useState(false)
    const [journalData, setJournalData] = useState([])

    let numEntires = 6
    let journalEntries = []
    for (let i=0; i<numEntires; i++) {
        journalEntries.push(<JournalEntry 
            date={`some date ${i}`}
            text={`journal entry text ${i}`} />)
    }

    const handleFetchEntries = () => {

        const fetchEntries = async () => {
            const res = await instance.get('/getjournal', {
                params: {
                    userid: userId,
                }
            })

            console.log(res.data)
            const data = res.data.Date.map((e, i) => {
                return {
                    date: e,
                    entry: res.data.Entry[i],
                }
            })
        }

        fetchEntries()
    }

    useEffect(() => {
        handleFetchEntries()
    }, [])

    return (
        <div className='opened-journal'>
            <div className='journal-top-pad'></div>
            <JournalEntries journalEntries={journalEntries} openForm={() => setJournalForm(!journalForm)}/>
            {journalForm ? <NewJournalEntry closeForm={() => setJournalForm(!journalForm)} instance={instance}/> : <div />}
            <div className='journal-bottom-pad'></div>
        </div>
    )
}

export default OpenedJournal