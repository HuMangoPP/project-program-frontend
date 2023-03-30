import Header from '../components/Header'
import Bubbles from '../components/Bubbles'

const Home = () => {
    return (
        <div className="home">
            <Bubbles />
            <Header 
                title='Pufferfish' 
                subtitle='Counselling App'
                link='/login' />
        </div>
    )
}

export default Home