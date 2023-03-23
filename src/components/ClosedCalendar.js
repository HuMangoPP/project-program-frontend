import { BsCalendarCheck } from 'react-icons/bs'

const ClosedCalendar = ({ onOpen }) => {
    return (
        <div className='closed-calendar'
            onClick={() => {
                const el = document.getElementsByClassName('closed-calendar')[0]
                el.classList.add('animate-opening')
                setTimeout(() => {
                    onOpen()
                    el.classList.remove('animate-opening')
                }, 1000)}}>
            <BsCalendarCheck color={'white'} size={'6em'} />
        </div>
    )
}

export default ClosedCalendar