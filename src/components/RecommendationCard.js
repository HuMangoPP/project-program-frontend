import { useNavigate } from 'react-router-dom'
import { RxExternalLink } from 'react-icons/rx'

const RecommendationCard = ({ title, desc, image, link }) => {

    const navigate = useNavigate()

    return (
        <div className='recommendation-card-load-in recommendation-card'
            onClick={() => navigate('/tasks')}>
            <div className='recommendation-title'>
                <div className='recommendation-link'
                    onClick={() => {
                        window.open(link, '_blank').focus()}} >
                    <RxExternalLink size={'1.5em'} />
                </div>
                <h1>{title}</h1>
            </div>
            <div className='recommendation-text'>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default RecommendationCard