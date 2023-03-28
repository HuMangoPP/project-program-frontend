import Header from "../components/Header";
import Bubbles from "../components/Bubbles";
import CardCarousel from "../components/CardCarousel"
import WarpButton from "../components/WarpButton";

const Recommendations = ({ recommendations }) => {
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