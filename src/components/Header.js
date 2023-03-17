import PropTypes from 'prop-types'

const Header = ({ title, subtitle, link }) => {
    return (
        <div className='webpage-container'>
            <a href={link} className='webpage-link'>{title}</a>
            <h2 className='webpage-subtitle'>{subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Title',
    subtitle: 'Subtitle'
}

export default Header