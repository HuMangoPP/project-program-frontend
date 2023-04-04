import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const ClosedJournal = ({ onOpen }) => {
    return (
        <motion.div className='closed-journal'
            onClick={() => {
                const el = document.getElementsByClassName('closed-journal')[0]
                el.classList.add('animate-journal-opening')
                el.classList.remove('closed-journal')
                setTimeout(() => {
                    onOpen()
                    el.classList.remove('animate-journal-opening')
                    el.classList.add('closed-journal')
                }, 1000)}}
                
            initial={{ opacity: 0, transform: 'translate(50%, -50%) scale(0)' }}
            animate={{ opacity: 1, transform: 'translate(50%, -50%) scale(1)' }}
            exit={{ opacity: 0, transform: 'translate(50%, -50%) scale(0)' }}
            transition={{ duration: .5 }}
            >
            <BsFillJournalBookmarkFill color={'white'} size={'10vh'}/>
        </motion.div>
    )
}

export default ClosedJournal