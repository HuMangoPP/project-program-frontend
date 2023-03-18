import Header from '../components/Header'
import Bubbles from '../components/Bubbles'

const Home = () => {
    return (
        <div className="home">
            <Bubbles />
            <Header 
                title='Title' 
                subtitle='Subtitle'
                link='/journal' />
        </div>
    )
}

export default Home