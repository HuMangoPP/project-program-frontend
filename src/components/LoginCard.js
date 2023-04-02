
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const LoginCard = ({ instance, setUserId, setNotifState }) => {

    
    const navigate = useNavigate()
    const [warningMsg, setWarningMsg] = useState('')
    const [sendMsg, setSendMsg] = useState('')

    const handleSendCodeBtn = () => {
        const email = document.getElementById('email-input').value.toLowerCase()

        if (!email) return

        const el = document.getElementById('code-input')
        el.classList.remove('hidden-code')

        const sendCode = async () => {
            const res = await instance.get('/login', {
                params: {
                    email: email,
                } 
            })
            setSendMsg(res.data.Status)
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
            console.log(res)
            let performShake = false
            if (res.data.Result === 'Success') {
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
        <motion.div className='login-card'
        
        initial={{ opacity: 0, top: '70vh' }}
        animate={{ opacity: 1, top: '50vh'  }}
        exit={{ opacity: 0, top: '30vh' }}
        transition={{ duration: 1 }}
        >
            <h1>Log In</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className='email-submission'>
                <input type='text'
                    className='email-input'
                    id='email-input'></input>
                <button className='send-code-btn' 
                        onClick={handleSendCodeBtn}>Send Code</button>
                </div>
                <p style={{
                    height: '1em'
                }}>{sendMsg}</p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }} >
                <p style={{
                    color: 'var(--lightred)',
                    height: '1em'
                }}>{warningMsg}</p>
                <input type='text' maxLength={15}
                       className='code-input hidden-code'
                       id='code-input'></input>
            </div>
            <button className='login-btn'
                    onClick={handleVerificationBtn} >Verify Login</button>
        </motion.div>
    )
}

export default LoginCard