import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const JournalPrompt = ({ prompt }) => {

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        document.getElementById('journal-query').value=''

        navigate('/recommendations')
    }

    return (
        <div className='journal-prompt'>
            <form onSubmit={handleSubmit}>
                <label for='journal-query'></label>
                <input type='text' 
                        id='journal-query' 
                        name='journal-query'
                        className='journal-input' 
                        placeholder={prompt} />
            </form>
        </div>
    )
}

JournalPrompt.defaultProps = {
    prompt: 'How are you feeling?'
}

JournalPrompt.propTypes = {
    prompt: PropTypes.string.isRequired
}


export default JournalPrompt