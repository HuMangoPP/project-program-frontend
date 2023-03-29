import Header from '../components/Header'
import JournalPrompt from '../components/JournalPrompt'
import Bubbles from '../components/Bubbles'
import WarpButton from '../components/WarpButton'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const MainJournal = ({ instance, setRecommendations, userId }) => {

    const navigate = useNavigate()
    useEffect(() => {
        if (userId == -1) navigate('/')
    }, [0])

    return (
        <div className='main-journal'>
            <Bubbles />
            <Header subtitle='Hey!👋 How are you today?' title='' />
            <WarpButton link='/dashboard' text='Jump to Dashboard' top={75} left={50} />
            <JournalPrompt instance={instance} setRecommendations={setRecommendations} userId={userId} />
        </div>
    )
}

export default MainJournal