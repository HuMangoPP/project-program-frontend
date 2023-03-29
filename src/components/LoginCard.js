
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginCard = ({ instance, setUserId, setNotifState }) => {

    
    const navigate = useNavigate()
    const [warningMsg, setWarningMsg] = useState('')

    const handleSendCodeBtn = () => {
        const email = document.getElementById('email-input').value.toLowerCase()

        if (!email) return

        const el = document.getElementsByClassName('verification-code')[0]
        el.classList.remove('hidden-code')

        const sendCode = async () => {
            const res = await instance.get('/login', {
                params: {
                    email: email,
                } 
            })

            console.log(res)
        }
        sendCode()
    }

    const handleVerificationBtn = () => {
        const codeInput = document.getElementById('code-input')
        const code = codeInput.value
        const email = document.getElementById('email-input').value.toLowerCase()

        if (!email) return
        if (!code) return

        const confirmVerify = async () => {
            const res = await instance.get('/verify', {
                params: {
                    email: email,
                    passcode: code,
                }
            })
            
            console.log(res.data)
            let performShake = false
            if (res.data.Result === 'Success') {
                console.log(res.data.UserID)
                setUserId(res.data.UserID)
                setNotifState(res.data.notifications)
                setWarningMsg('')
                navigate('/journal')
            } else if (res.data.Result === 'Invalid Code') {
                setWarningMsg('Invalid Code')
                performShake = true
            } else if (res.data.Result === 'Code Expired') {
                setWarningMsg('Code Expired')
                performShake = true
            }

            if (performShake) {
                codeInput.classList.add('warning-shake')
                setTimeout(() => {
                    codeInput.classList.remove('warning-shake')
                }, 500);
            }
        }

        confirmVerify()
    }

    return (
        <div className='login-card'>
            <h1>Log In</h1>
            <div className='email-submission'>
            <input type='text'
                   className='email-input'
                   id='email-input'></input>
            <button className='send-code-btn' 
                    onClick={handleSendCodeBtn}>Send Code</button>
            </div>
            <div className='verification-code hidden-code' >
                <p className='warning-msg'>{warningMsg}</p>
                <input type='text' maxLength={15}
                       className='code-input'
                       id='code-input'></input>
            </div>
            <button className='login-btn'
                    onClick={handleVerificationBtn} >Verify Login</button>
        </div>
    )
}

export default LoginCard