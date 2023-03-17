
const RecommendationCard = ({ title, desc, image, link }) => {
    return (
        <div className='recommendation-card'
             onClick={e => {
                window.location.href = '/tasks'
             }}>
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