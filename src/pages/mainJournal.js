import Header from '../components/Header'
import JournalPrompt from '../components/JournalPrompt'
import Bubbles from '../components/Bubbles'
import WarpButton from '../components/WarpButton'

const MainJournal = ({ instance, setRecommendations }) => {

    return (
        <div className='main-journal'>
            <Bubbles />
            <Header subtitle='Hey!👋 How are you today?' title='' />
            <WarpButton link='/tasks' text='Jump to Tasks' top={75} left={50} />
            <JournalPrompt instance={instance} setRecommendations={setRecommendations} />
        </div>
    )
}

export default MainJournal