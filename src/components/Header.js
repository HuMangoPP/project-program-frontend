import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ title, subtitle, link }) => {
    return (
        <div className='webpage-container'>
            <Link to={link} className='webpage-link'>{title}</Link>
            <h2 className='webpage-subtitle'>{subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Title',
    subtitle: 'Subtitle'
}

export default Header