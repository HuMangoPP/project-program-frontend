import JournalEntries from "./JournalEntries"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const OpenedJournal = ({ instance, userId }) => {

    const [journalData, setJournalData] = useState([])

    const handleGetEntries = () => {

        const getEntries = async () => {
            const res = await instance.get('/getjournal', {
                params: {
                    userid: userId,
                }
            })
            const data = res.data.Date.map((e, i) => {
                return {
                    date: e,
                    entry: res.data.Entry[i],
                    habits: [
                        res.data.Habit1[i], 
                        res.data.Habit2[i],
                        res.data.Habit3[i],
                        res.data.Habit4[i],
                        res.data.Habit5[i],
                    ],
                    journalId: res.data.JournalID[i],
                }
            })

            setJournalData(data)
            console.log(journalData)
        }

        getEntries()
    }

    const handleDeleteEntries = ({ journalId }) => {
        const deleteEntries = async () => {
            const res = await instance.get('/deletejournal', {
                params: {
                    userid: userId,
                    journalid: journalId,
                }
            })

            console.log(res)
        }

        deleteEntries()
        handleGetEntries()
    }

    useEffect(() => {
        handleGetEntries()
    }, [0])

    return (
        <motion.div className='opened-journal'
        
        initial={false}
        animate={{ transform: 'translateX(0)', opacity: 1 }}
        exit={{ transform: 'translateX(100%)', opacity: 0 }}
        transition={{ duration: 1 }}
        >
            <div className='journal-top-pad'></div>
            <JournalEntries journalData={journalData} handleDelete={handleDeleteEntries} />
            <div className='journal-bottom-pad'></div>
        </motion.div>
    )
}

export default OpenedJournal