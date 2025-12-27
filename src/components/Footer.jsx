import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="logo-icon">🔧</span>
                            <span className="footer-brand">
                                <span className="logo-primary">ProPlumb</span>
                                <span className="logo-secondary">Canada</span>
                            </span>
                        </div>
                        <p className="footer-description">
                            Professional plumbing services you can trust. Licensed, insured, and dedicated to excellence.
                        </p>
                        <div className="footer-badges">
                            <span className="badge badge-success">Licensed & Insured</span>
                            <span className="badge badge-primary">24/7 Service</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <nav className="footer-nav">
                            <Link to="/" className="footer-link">Home</Link>
                            <Link to="/services" className="footer-link">Our Services</Link>
                            <Link to="/about" className="footer-link">About Us</Link>
                            <Link to="/contact" className="footer-link">Contact</Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4 className="footer-title">Services</h4>
                        <nav className="footer-nav">
                            <Link to="/services" className="footer-link">Emergency Plumbing</Link>
                            <Link to="/services" className="footer-link">Drain Cleaning</Link>
                            <Link to="/services" className="footer-link">Repairs & Installations</Link>
                            <Link to="/services" className="footer-link">Water Heaters</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="footer-title">Contact Us</h4>
                        <div className="footer-contact">
                            <a href="tel:+1-800-555-PLUMB" className="contact-item">
                                <span className="contact-icon">📞</span>
                                <span>1-800-555-PLUMB</span>
                            </a>
                            <a href="mailto:info@proplumb.ca" className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <span>info@proplumb.ca</span>
                            </a>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>Serving all of Canada</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">⏰</span>
                                <div>
                                    <div>24/7 Emergency Service</div>
                                    <div className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
                                        Mon-Fri: 8am - 6pm<br />
                                        Sat-Sun: 9am - 4pm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} ProPlumb Canada. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#" className="footer-legal-link">Privacy Policy</a>
                        <span className="footer-divider">•</span>
                        <a href="#" className="footer-legal-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
