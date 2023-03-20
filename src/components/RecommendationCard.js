import { useNavigate } from 'react-router-dom'

const RecommendationCard = ({ title, desc, image, link }) => {

    const navigate = useNavigate()

    return (
        <div className='recommendation-card'
            onClick={() => navigate('/tasks')}>
            <div className='recommendation-title'>
                <h1>{title}</h1>
            </div>
            <div className='recommendation-text'>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default RecommendationCard