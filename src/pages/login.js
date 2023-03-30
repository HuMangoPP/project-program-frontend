import Bubbles from "../components/Bubbles"
import LoginCard from "../components/LoginCard"

const Login = ({ instance, setUserId, setNotifState }) => {
    return (
        <div>
            <Bubbles />
            <LoginCard instance={instance} setUserId={setUserId} setNotifState={setNotifState} />
        </div>
    )
}

export default Login