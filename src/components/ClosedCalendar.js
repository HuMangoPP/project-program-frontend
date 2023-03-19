import { BsCalendarCheck } from 'react-icons/bs'

const ClosedCalendar = ({ onOpen }) => {
    return (
        <div className='closed-calendar'
             onClick={onOpen}>
            <BsCalendarCheck color={'white'} size={'6em'} />
        </div>
    )
}

export default ClosedCalendar