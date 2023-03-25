import RecommendationCard from "./RecommendationCard"

const CardCarousel = ({ recommendations }) => {

    const numCards = recommendations.length
    let cards = []
    for (let i=0; i<numCards; i++) {
        cards.push(
            <RecommendationCard title={recommendations[i].habit} 
                                desc={recommendations[i].desc} />
        )
    }

    return (
        <div className='card-carousel'>
            {cards}
        </div>
    )
}

export default CardCarousel