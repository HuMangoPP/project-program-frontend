import Header from '../components/Header'
import Bubbles from '../components/Bubbles'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.div className="home"
        
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Bubbles />
            <Header 
                title='Pufferfish' 
                subtitle='Counselling App'
                link='/login' />
        </motion.div>
    )
}

export default Home