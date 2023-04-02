import Bubbles from "../components/Bubbles"
import LoginCard from "../components/LoginCard"
import { motion } from 'framer-motion'

const Login = ({ instance, setUserId, setNotifState }) => {
    return (
        <motion.div
        
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Bubbles />
            <LoginCard instance={instance} setUserId={setUserId} setNotifState={setNotifState} />
        </motion.div>
    )
}

export default Login