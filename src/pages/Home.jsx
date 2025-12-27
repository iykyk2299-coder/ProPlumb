import ServiceCard from '../components/ServiceCard';
import TrustBadge from '../components/TrustBadge';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title fade-in">
                            Reliable Plumbing Services You Can Trust
                        </h1>
                        <p className="hero-subtitle fade-in">
                            Professional plumbing solutions for your home and business.
                            Available 24/7 for emergencies across Canada.
                        </p>
                        <div className="hero-cta fade-in">
                            <a href="tel:+1-800-555-PLUMB" className="btn btn-primary btn-lg">
                                <span className="btn-icon">📞</span>
                                Call Now: 1-800-555-PLUMB
                            </a>
                            <a href="/contact" className="btn btn-secondary btn-lg">
                                Get a Free Quote
                            </a>
                        </div>
                        <div className="hero-features">
                            <div className="hero-feature">
                                <span className="feature-icon">✓</span>
                                <span>Licensed & Insured</span>
                            </div>
                            <div className="hero-feature">
                                <span className="feature-icon">✓</span>
                                <span>Same-Day Service</span>
                            </div>
                            <div className="hero-feature">
                                <span className="feature-icon">✓</span>
                                <span>Upfront Pricing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section services-overview">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Plumbing Services</h2>
                        <p className="section-subtitle">
                            Comprehensive plumbing solutions for residential and commercial clients
                        </p>
                    </div>

                    <div className="grid grid-4">
                        <ServiceCard
                            icon="🚨"
                            title="Emergency Plumbing"
                            description="24/7 emergency response for burst pipes, leaks, and urgent repairs. We're here when you need us most."
                        />
                        <ServiceCard
                            icon="🚰"
                            title="Drain Cleaning"
                            description="Professional drain cleaning and unclogging services using advanced equipment for lasting results."
                        />
                        <ServiceCard
                            icon="🔧"
                            title="Repairs & Maintenance"
                            description="Expert repairs for faucets, toilets, pipes, and all plumbing fixtures. Preventive maintenance available."
                        />
                        <ServiceCard
                            icon="🔥"
                            title="Water Heater Services"
                            description="Installation, repair, and maintenance of water heaters. Energy-efficient upgrades available."
                        />
                    </div>

                    <div className="services-cta">
                        <a href="/services" className="btn btn-accent btn-lg">
                            View All Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="section section-trust">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose ProPlumb Canada?</h2>
                        <p className="section-subtitle">
                            Your trusted partner for all plumbing needs
                        </p>
                    </div>

                    <div className="grid grid-3">
                        <TrustBadge
                            icon="🛡️"
                            title="Licensed & Insured"
                            description="Fully licensed, bonded, and insured for your peace of mind"
                        />
                        <TrustBadge
                            icon="⭐"
                            title="15+ Years Experience"
                            description="Decades of expertise serving Canadian homes and businesses"
                        />
                        <TrustBadge
                            icon="😊"
                            title="Customer Satisfaction"
                            description="98% customer satisfaction rate with hundreds of 5-star reviews"
                        />
                    </div>

                    <div className="guarantee-banner">
                        <div className="guarantee-content">
                            <h3 className="guarantee-title">100% Satisfaction Guarantee</h3>
                            <p className="guarantee-text">
                                We stand behind our work. If you're not completely satisfied, we'll make it right.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area */}
            <section className="section section-area">
                <div className="container">
                    <div className="area-content">
                        <div className="area-text">
                            <h2 className="area-title">Serving Communities Across Canada</h2>
                            <p className="area-description">
                                From coast to coast, ProPlumb Canada provides reliable plumbing services
                                to homeowners, property managers, and businesses. We're proud to serve
                                communities throughout Canada with fast, professional service.
                            </p>
                            <ul className="area-list">
                                <li>✓ Residential Plumbing</li>
                                <li>✓ Commercial Plumbing</li>
                                <li>✓ Emergency Services</li>
                                <li>✓ Preventive Maintenance</li>
                            </ul>
                            <a href="/contact" className="btn btn-primary btn-lg">
                                Check Service Availability
                            </a>
                        </div>
                        <div className="area-visual">
                            <div className="map-placeholder">
                                <span className="map-icon">🗺️</span>
                                <p className="map-text">Canada-Wide Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="cta-banner">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Need a Plumber? We're Here to Help!</h2>
                        <p className="cta-subtitle">
                            Don't wait for a small problem to become a big one. Contact us today for fast,
                            reliable service.
                        </p>
                        <div className="cta-buttons">
                            <a href="tel:+1-800-555-PLUMB" className="btn btn-primary btn-lg">
                                <span className="btn-icon">📞</span>
                                Call: 1-800-555-PLUMB
                            </a>
                            <a href="/contact" className="btn btn-secondary btn-lg">
                                Request a Quote
                            </a>
                        </div>
                        <p className="cta-note">
                            Available 24/7 for emergency service • Free estimates • Same-day service available
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
