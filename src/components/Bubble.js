import { motion } from 'framer-motion'

const Bubble = ({ top, left, size, topStart, topEnd }) => {
    const bubbleStyle = {
        left,
    }
    return (
        <motion.div className='bubble'
        style={bubbleStyle}

        initial={{ top: `${topStart}%`, opacity: 0, width: 0, height: 0 }}
        animate={{ top: `${top}%`, opacity: .5, width: size, height: size }}
        exit={{ top: `${topEnd}%`, opacity: 0, width: 0, height: 0 }}
        transition={{ duration: 1 }}
        ></motion.div>
    )
}

export default Bubble