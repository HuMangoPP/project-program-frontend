import { RxExternalLink } from 'react-icons/rx'

const RecommendationCard = ({ title, desc, image, link }) => {

    const imageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className='recommendation-card'>
            <div className='recommendation-title' 
                 style={imageStyle}>
                <div className='recommendation-link'
                    onClick={() => window.open(link, '_blank').focus()} >
                    <RxExternalLink size={'1.5em'} />
                </div>
                <h1 onClick={() => window.open(image, '_blank').focus()}>
                    <span>{title}</span>
                </h1>
            </div>
            <div className='recommendation-text'>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default RecommendationCard