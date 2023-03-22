import { BsFillJournalBookmarkFill } from 'react-icons/bs'

const ClosedJournal = ({ onOpen }) => {
    return (
        <div className='closed-journal'
             onClick={() => onOpen()}>
            <BsFillJournalBookmarkFill color={'white'} size={'6em'}/>
        </div>
    )
}

export default ClosedJournal