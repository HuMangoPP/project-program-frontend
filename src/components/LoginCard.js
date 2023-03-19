import { Link } from 'react-router-dom'

const LoginCard = () => {
    return (
        <div className='login-card'>
            <h1>Log In</h1>
            <Link to='/journal'>
                <button className='login-btn'>Click me</button>
            </Link>
        </div>
    )
}

export default LoginCard