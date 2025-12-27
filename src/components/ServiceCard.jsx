import PropTypes from 'prop-types';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link = '/services' }) => {
    return (
        <div className="service-card">
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
            <a href={link} className="service-link">
                Learn More →
            </a>
        </div>
    );
};

ServiceCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default ServiceCard;
