import PropTypes from 'prop-types';
import './TrustBadge.css';

const TrustBadge = ({ icon, title, description }) => {
    return (
        <div className="trust-badge">
            <div className="trust-icon">{icon}</div>
            <div className="trust-content">
                <h4 className="trust-title">{title}</h4>
                <p className="trust-description">{description}</p>
            </div>
        </div>
    );
};

TrustBadge.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default TrustBadge;
