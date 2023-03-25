import Bubbles from "../components/Bubbles"
import LoginCard from "../components/LoginCard"

const Login = ({ instance, setUserId }) => {
    return (
        <div>
            <Bubbles />
            <LoginCard instance={instance} setUserId={setUserId} />
        </div>
    )
}

export default Login