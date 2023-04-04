import { BsCalendarCheck } from 'react-icons/bs'
import { motion } from 'framer-motion'

const ClosedCalendar = ({ onOpen }) => {
    return (
        <motion.div className='closed-calendar'
            onClick={() => {
                const el = document.getElementsByClassName('closed-calendar')[0]
                el.classList.add('animate-calendar-opening')
                el.classList.remove('closed-calendar')
                setTimeout(() => {
                    onOpen()
                    el.classList.remove('animate-calendar-opening')
                    el.classList.add('closed-calendar')
                }, 1000)}}
                
            initial={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0)' }}
            animate={{ opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }}
            exit={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0)' }}
            transition={{ duration: .5 }}
            >
            <BsCalendarCheck color={'white'} size={'10vh'} />
        </motion.div>
    )
}

export default ClosedCalendar