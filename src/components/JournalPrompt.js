import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const JournalPrompt = ({ instance, setRecommendations }) => {

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const query = document.getElementById('journal-query').value

        if (!query) return

        document.getElementById('journal-query').value = ''

        const makeQuery = async () => {
            const res = await instance.get('/recommend', {
                params: {
                    userid: 0,
                    input: query,
                }
            })
        
            const recommendations = res.data.Habits.map((e, i) => {
                return {
                    number: i,
                    habit: e,
                    desc: res.data.Description[i],
                    image: res.data.Images[i],
                    link: res.data.Resources[i],
                }
            })

            setRecommendations(recommendations)
        }

        makeQuery()

        navigate('/recommendations')
    }

    return (
        <div className='journal-prompt'>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                        id='journal-query' 
                        name='journal-query'
                        className='journal-input' />
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