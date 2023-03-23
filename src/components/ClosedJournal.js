import { BsFillJournalBookmarkFill } from 'react-icons/bs'

const ClosedJournal = ({ onOpen }) => {
    return (
        <div className='closed-journal'
            onClick={() => {
                const el = document.getElementsByClassName('closed-journal')[0]
                el.classList.add('animate-opening')
                setTimeout(() => {
                    onOpen()
                    el.classList.remove('animate-opening')
                }, 1000)}}>
            <BsFillJournalBookmarkFill color={'white'} size={'6em'}/>
        </div>
    )
}

export default ClosedJournal