import Bubble from './Bubble'

const Bubbles = () => {
    const numBubbles = 12
    const tops = Array.from({length: numBubbles}, () => `${Math.floor(Math.random()*100)}%`)
    const lefts = Array.from({length: numBubbles}, () => `${Math.floor(Math.random()*100)}%`)
    const sizes = Array.from({length: numBubbles}, () => `${Math.floor(Math.random()*15+5)}em`)
    let bubbles = []
    for (let i=0; i<numBubbles; i++) {
        bubbles.push(<Bubble top={tops[i]} left={lefts[i]} size={sizes[i]} />)
    }

    const root = document.documentElement
    // const bubbleDivs = document.querySelectorAll('.bubble')
    // console.log(bubbleDivs)
    document.addEventListener('mousemove', evt => {
        let parallaxX = (1 - 2*evt.clientX/window.innerWidth)
        let parallaxY = (1 - 2*evt.clientY/window.innerHeight)

        root.style.setProperty('--parallax-x', `${parallaxX}em`)
        root.style.setProperty('--parallax-y', `${parallaxY}em`)
        // const bubbleDivs = document.querySelectorAll('.bubble')
        // console.log(bubbleDivs)
    })

    return (
        <div className='bubbles'>
            {bubbles}
        </div>
    )
}

export default Bubbles