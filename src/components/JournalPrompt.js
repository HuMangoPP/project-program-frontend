import PropTypes from 'prop-types'

const JournalPrompt = ({ prompt }) => {

    const form = document.getElementById('journal-query')
    
    console.log(form)

    return (
        <div className='journal-prompt'>
            <form onSubmit={(e) => {
                console.log(document.getElementById('journal-query').value)
                document.getElementById('journal-query').value = ''
                e.preventDefault()
                window.location.href = '/recommendations'
            }}>
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