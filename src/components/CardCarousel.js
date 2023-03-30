import RecommendationCard from "./RecommendationCard"
import { motion } from 'framer-motion'

const CardCarousel = ({ recommendations }) => {

    const numCards = recommendations.length
    let cards = []
    for (let i=0; i<numCards; i++) {
        cards.push(
            <RecommendationCard key={`recommendation-${i}`}
                                title={recommendations[i].habit} 
                                desc={recommendations[i].desc} 
                                link={recommendations[i].link} 
                                image={recommendations[i].image} />
        )
    }

    return (
        <motion.div className='card-carousel'

        initial={{ opacity: 0, transform: 'translate(0, 100vh)' }}
        animate={{ opacity: 1, transform: 'translate(0, 0)' }}
        exit={{ opacity: 0, transform: 'translate(0, -100vh)' }}
        transition={{ duration: 1 }}>
            {cards}
        </motion.div>
    )
}

export default CardCarousel