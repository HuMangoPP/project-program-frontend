import Header from '../components/Header'
import JournalPrompt from '../components/JournalPrompt'
import Bubbles from '../components/Bubbles'
import WarpButton from '../components/WarpButton'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const MainJournal = ({ instance, setRecommendations, userId }) => {

    const navigate = useNavigate()
    useEffect(() => {
        if (userId === -1) navigate('/')
    }, [0])

    return (
        <motion.div className='main-journal'
        
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Bubbles />
            <Header subtitle='Hey!👋 How are you today?' title='' />
            <WarpButton link='/dashboard' text='Jump to Dashboard' top={75} left={50} />
            <JournalPrompt instance={instance} setRecommendations={setRecommendations} userId={userId} />
        </motion.div>
    )
}

export default MainJournal