import Header from "../components/Header";
import Bubbles from "../components/Bubbles";
import CardCarousel from "../components/CardCarousel"
import WarpButton from "../components/WarpButton";

const Recommendations = ({ recommendations }) => {
    return (
        <div className='recommendations-page'>
            <Bubbles />
            <Header title='' 
            subtitle='Here are some Recommendations.' />
            <Header title=''
            subtitle='Do you see anything interesting?' />
            <WarpButton link='/tasks' top={10} left={95} text='Jump to Tasks' />
            <CardCarousel recommendations={recommendations} />
        </div>
    )
}

export default Recommendations