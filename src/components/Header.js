import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Header = ({ title, subtitle, link }) => {

    const navigate = useNavigate()

    return (
        <div className='webpage-container'>
            <div className='webpage-link'>
                <h1 onClick={() => navigate(link)}>{title}</h1>
            </div>
            <div className='webpage-subtitle'>
                <h2>{subtitle}</h2>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'Title',
    subtitle: 'Subtitle'
}

export default Header