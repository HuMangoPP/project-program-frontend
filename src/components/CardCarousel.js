import RecommendationCard from "./RecommendationCard"
import { useEffect } from 'react'

const CardCarousel = ({ recommendations }) => {

    const numCards = recommendations.length
    let cards = []
    for (let i=0; i<numCards; i++) {
        cards.push(
            <RecommendationCard title={recommendations[i].habit} 
                                desc={recommendations[i].desc} 
                                link={recommendations[i].link} />
        )
    }

    setTimeout(() => {
        const els = document.getElementsByClassName('recommendation-card')

        for (const el of els) {
            el.classList.remove('recommendation-card-load-in')
        }
    }, 500);

    return (
        <div className='card-carousel'>
            {cards}
        </div>
    )
}

export default CardCarousel