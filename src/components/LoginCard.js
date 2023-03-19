
const LoginCard = () => {
    return (
        <div className='login-card'>
            <h1>Log In</h1>
            <button onClick={() => {
                window.location.href='/journal'
            }} className='login-btn'>Click me</button>
        </div>
    )
}

export default LoginCard