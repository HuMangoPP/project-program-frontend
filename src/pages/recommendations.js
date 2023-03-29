
import Bubbles from "../components/Bubbles";
import CardCarousel from "../components/CardCarousel"
import WarpButton from "../components/WarpButton";
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Recommendations = ({ recommendations, userId }) => {

    const navigate = useNavigate()
    useEffect(() => {
        if (userId == -1) navigate('/')
    }, [0])

    return (
        <div className='recommendations-page'>
            <Bubbles />
            <div className='recommendations-header'>
                <h1>Here are some Recommendations. Do you see anything interesting?</h1>
            </div>
            <WarpButton link='/dashboard' top={10} left={95} text='Jump to Dashboard' />
            <CardCarousel recommendations={recommendations} />
        </div>
    )
}

export default Recommendations