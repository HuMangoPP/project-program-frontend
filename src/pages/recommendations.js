
import Bubbles from "../components/Bubbles";
import CardCarousel from "../components/CardCarousel"
import WarpButton from "../components/WarpButton";
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const Recommendations = ({ recommendations, userId }) => {

    const navigate = useNavigate()
    useEffect(() => {
        if (userId === -1) navigate('/')
    }, [])

    return (
        <div className='recommendations-page'>
            <Bubbles />
            <motion.div className='recommendations-header'
            
            initial={{ opacity: 0, transform: 'translate(0, 100vh)' }}
            animate={{ opacity: 1, transform: 'translate(0, 0)' }}
            exit={{ opacity: 0, transform: 'translate(0, -100vh)' }}
            transition={{ duration: 1 }}
            >
                <h1>Here are some Recommendations. Do you see anything interesting?</h1>
            </motion.div>
            <WarpButton link='/dashboard' top={10} left={95} text='Jump to Dashboard' />
            <CardCarousel recommendations={recommendations} />
        </div>
    )
}

export default Recommendations