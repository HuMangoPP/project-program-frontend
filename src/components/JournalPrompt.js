
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const JournalPrompt = ({ instance, setRecommendations, userId }) => {

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const query = document.getElementById('journal-query').value

        if (!query) return

        document.getElementById('journal-query').value = ''

        const makeQuery = async () => {
            const res = await instance.get('/recommend', {
                params: {
                    userid: userId,
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
        <motion.div className='journal-prompt'
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transform: 'translate(0, calc(0 - 50vh))' }}
        transition={{ duration: 1 }}
        >
            <form onSubmit={handleSubmit} 
                  style={{
                    width: '60%'
                  }}>
                <input type='text' 
                        id='journal-query' 
                        name='journal-query'
                        className='journal-input' />
            </form>
        </motion.div>
    )
}


export default JournalPrompt