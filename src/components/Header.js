import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = ({ title, subtitle, link }) => {

    const navigate = useNavigate()

    return (
        <motion.div className='webpage-container'
        
        initial={{ opacity: 0, transform: 'translate(-50%, -50%)' }}
        animate={{ opacity: 1, transform: 'translate(-50%, -50%)'  }}
        exit={{ opacity: 0, transform: 'translate(-50%, calc(-50% - 50vh))' }}
        transition={{ duration: 1 }}
        >
            <div className='webpage-link'>
                <h1 onClick={() => navigate(link)}>{title}</h1>
            </div>
            <div className='webpage-subtitle'>
                <h2>{subtitle}</h2>
            </div>
        </motion.div>
    )
}

Header.defaultProps = {
    title: 'Title',
    subtitle: 'Subtitle'
}

export default Header