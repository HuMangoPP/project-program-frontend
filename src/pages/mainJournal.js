import Header from '../components/Header'
import JournalPrompt from '../components/JournalPrompt'
import Bubbles from '../components/Bubbles'
import WarpButton from '../components/WarpButton'

const MainJournal = ({ instance, setRecommendations, userId }) => {

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