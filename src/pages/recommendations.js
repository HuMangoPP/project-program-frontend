import Header from "../components/Header";
import Bubbles from "../components/Bubbles";
import CardCarousel from "../components/CardCarousel"

const Recommendations = () => {
    return (
        <div className='recommendations-page'>
            <Bubbles />
            <Header title='' 
            subtitle='Here are some Recommendations.' />
            <Header title=''
            subtitle='Do you see anything interesting?' />
            <CardCarousel />
        </div>
    )
}

export default Recommendations