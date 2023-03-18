import RecommendationCard from "./RecommendationCard"

const CardCarousel = () => {

    const numCards = 5
    let cards = []
    let selector = numCards/2
    for (let i=0; i<numCards; i++) {
        cards.push(
            <RecommendationCard title={`card ${i}`} 
                                desc={`this is card ${i}`} />
        )
    }

    return (
        <div className='card-carousel'>
            {cards}
        </div>
    )
}

export default CardCarousel