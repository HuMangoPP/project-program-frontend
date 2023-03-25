import { Link } from 'react-router-dom'
import { useState } from 'react'

const LoginCard = () => {

    const [openVerification, setOpenVerification] = useState(false)

    return (
        <div className='login-card'>
            <h1>Log In</h1>
            <div className='email-submission'>
            <input type='text'
                   className='email-input'></input>
            <button className='send-code-btn' 
                    onClick={() => {
                        setOpenVerification(true)
                        const el = document.getElementsByClassName('verification-code')[0]
                        el.classList.remove('hidden-code')
                    }}>Send Code</button>
            </div>
            <div className='verification-code hidden-code' >
                <input type='text' 
                        className='code-slot'
                        maxLength={1}></input>
                <input type='text' 
                        className='code-slot'
                        maxLength={1}></input>
                <input type='text' 
                        className='code-slot'
                        maxLength={1}></input>
                <input type='text' 
                        className='code-slot'
                        maxLength={1}></input>
                <input type='text' 
                        className='code-slot'
                        maxLength={1}></input>
                <input type='text' 
                        className='code-slot'
                        maxLength={1}></input>
            </div>
            <Link to='/journal'>
                <button className='login-btn'>Verify Login</button>
            </Link>
        </div>
    )
}

export default LoginCard