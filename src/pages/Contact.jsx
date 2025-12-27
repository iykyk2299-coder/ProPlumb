import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('This is a UI demo. In production, this would submit to a backend service.');
        console.log('Form data:', formData);
    };

    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">
                        Get in touch for a free quote or emergency service
                    </p>
                </div>
            </section>

            <section className="emergency-banner">
                <div className="container">
                    <div className="emergency-content">
                        <span className="emergency-icon">🚨</span>
                        <div className="emergency-text">
                            <h3 className="emergency-title">Need Emergency Service?</h3>
                            <p className="emergency-description">We're available 24/7 for plumbing emergencies</p>
                        </div>
                        <a href="tel:+1-800-555-PLUMB" className="btn btn-accent btn-lg">
                            <span className="btn-icon">📞</span>
                            Call Now: 1-800-555-PLUMB
                        </a>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-container">
                            <h2 className="form-heading">Request a Free Quote</h2>
                            <p className="form-subheading">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Smith"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service" className="form-label">Service Needed *</label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="form-select"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="emergency">Emergency Plumbing</option>
                                        <option value="drain">Drain Cleaning</option>
                                        <option value="repair">Repair & Maintenance</option>
                                        <option value="water-heater">Water Heater Service</option>
                                        <option value="installation">Installation</option>
                                        <option value="commercial">Commercial Plumbing</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Please describe your plumbing needs..."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                    Send Request
                                </button>
                            </form>
                        </div>

                        <div className="contact-info-container">
                            <h2 className="info-heading">Get In Touch</h2>

                            <div className="info-card">
                                <div className="info-icon">📞</div>
                                <div className="info-content">
                                    <h4 className="info-title">Phone</h4>
                                    <a href="tel:+1-800-555-PLUMB" className="info-link">1-800-555-PLUMB</a>
                                    <p className="info-detail">Click to call anytime</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">✉️</div>
                                <div className="info-content">
                                    <h4 className="info-title">Email</h4>
                                    <a href="mailto:info@proplumb.ca" className="info-link">info@proplumb.ca</a>
                                    <p className="info-detail">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">📍</div>
                                <div className="info-content">
                                    <h4 className="info-title">Service Area</h4>
                                    <p className="info-text">Serving all of Canada</p>
                                    <p className="info-detail">Licensed in all provinces</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">⏰</div>
                                <div className="info-content">
                                    <h4 className="info-title">Business Hours</h4>
                                    <div className="hours-list">
                                        <p className="hours-item">
                                            <span className="hours-day">Mon - Fri:</span>
                                            <span className="hours-time">8:00 AM - 6:00 PM</span>
                                        </p>
                                        <p className="hours-item">
                                            <span className="hours-day">Sat - Sun:</span>
                                            <span className="hours-time">9:00 AM - 4:00 PM</span>
                                        </p>
                                        <p className="hours-note">24/7 Emergency Service Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
