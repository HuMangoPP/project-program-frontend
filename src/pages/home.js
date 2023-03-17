import Title from '../components/Header'
import Bubbles from '../components/Bubbles'

const Home = () => {
    return (
        <div className="home">
            <Bubbles />
            <Title 
                title='Title' 
                subtitle='Subtitle'
                link='/journal' />
        </div>
    )
}

export default Home