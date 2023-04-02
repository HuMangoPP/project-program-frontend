import Bubble from './Bubble'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Bubbles = () => {
    const [bubblesData, setBubblesData] = useState([])

    useEffect(() => {
        const numBubbles = 12
        const tops = Array.from({length: numBubbles}, () => Math.floor(Math.random()*100))
        const lefts = Array.from({length: numBubbles}, () => `${Math.floor(Math.random()*100)}%`)
        const sizes = Array.from({length: numBubbles}, () => `${Math.floor(Math.random()*15+5)}vh`)
        const topStart = Array.from({ length: numBubbles }, (e, i) => tops[i]+100)
        const topEnd = Array.from({ length: numBubbles }, (e, i) => tops[i]-100)

        let bubbles = []
        for (let i=0; i<numBubbles; i++) {
            bubbles.push(<Bubble key={`bubble-${i}`} top={tops[i]} left={lefts[i]} size={sizes[i]} 
                                 topStart={topStart[i]} topEnd={topEnd[i]} />)
        }

        setBubblesData(bubbles)
    }, [])

    const root = document.documentElement
    document.addEventListener('mousemove', evt => {
        let parallaxX = (1 - 2*evt.clientX/window.innerWidth)
        let parallaxY = (1 - 2*evt.clientY/window.innerHeight)

        root.style.setProperty('--parallax-x', `${parallaxX}em`)
        root.style.setProperty('--parallax-y', `${parallaxY}em`)
    })

    return (
        <motion.div className='bubbles'
        
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {bubblesData}
        </motion.div>
    )
}

export default Bubbles