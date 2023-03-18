import Header from '../components/Header'
import JournalPrompt from '../components/JournalPrompt'
import Bubbles from '../components/Bubbles'

const MainJournal = () => {
    return (
        <div className='main-journal'>
            <Bubbles />
            <Header subtitle='Hey!👋 How are you today?' title='' />
            <JournalPrompt />
        </div>
    )
}

export default MainJournal