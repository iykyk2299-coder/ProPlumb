import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">About ProPlumb Canada</h1>
                    <p className="page-subtitle">
                        Your trusted partner for professional plumbing services across Canada
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="about-title">Our Story</h2>
                            <p className="about-paragraph">
                                For over 15 years, ProPlumb Canada has been the trusted name in professional
                                plumbing services across the country. What started as a small family business
                                has grown into one of Canada's most reliable plumbing service providers.
                            </p>
                            <p className="about-paragraph">
                                We built our reputation on three core principles: quality workmanship, honest
                                pricing, and exceptional customer service. Every member of our team shares these
                                values and is committed to exceeding customer expectations on every job.
                            </p>
                            <p className="about-paragraph">
                                From emergency repairs to complex installations, we approach every project with
                                the same level of professionalism and attention to detail. Our customers trust
                                us because we've earned that trust through consistent, reliable service.
                            </p>
                        </div>
                        <div className="about-image">
                            <div className="placeholder-image">
                                <span className="placeholder-icon">👷</span>
                                <p className="placeholder-text">Professional Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section section-values">
                <div className="container">
                    <h2 className="section-title text-center">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3 className="value-title">Reliability</h3>
                            <p className="value-description">
                                We show up on time, every time. Our customers count on us to be there when
                                they need us, especially in emergencies.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">💎</div>
                            <h3 className="value-title">Quality</h3>
                            <p className="value-description">
                                We never cut corners. Every job is completed to the highest standards using
                                quality materials and proven techniques.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3 className="value-title">Integrity</h3>
                            <p className="value-description">
                                Honest assessments, fair pricing, and transparent communication. We treat
                                every customer with respect and honesty.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🌟</div>
                            <h3 className="value-title">Excellence</h3>
                            <p className="value-description">
                                We're always improving our skills and staying current with the latest
                                plumbing technologies and best practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <div className="why-choose">
                        <h2 className="about-title text-center">Why Choose ProPlumb Canada?</h2>
                        <div className="features-grid">
                            <div className="feature-item">
                                <span className="feature-number">01</span>
                                <h3 className="feature-title">Licensed & Insured</h3>
                                <p className="feature-text">
                                    All our plumbers are fully licensed, bonded, and insured for your complete
                                    peace of mind.
                                </p>
                            </div>
                            <div className="feature-item">
                                <span className="feature-number">02</span>
                                <h3 className="feature-title">Experienced Team</h3>
                                <p className="feature-text">
                                    Our technicians have years of hands-on experience handling all types of
                                    plumbing challenges.
                                </p>
                            </div>
                            <div className="feature-item">
                                <span className="feature-number">03</span>
                                <h3 className="feature-title">24/7 Emergency Service</h3>
                                <p className="feature-text">
                                    Plumbing emergencies don't wait for business hours. We're available around
                                    the clock.
                                </p>
                            </div>
                            <div className="feature-item">
                                <span className="feature-number">04</span>
                                <h3 className="feature-title">Upfront Pricing</h3>
                                <p className="feature-text">
                                    No surprises. We provide clear, detailed estimates before starting any work.
                                </p>
                            </div>
                            <div className="feature-item">
                                <span className="feature-number">05</span>
                                <h3 className="feature-title">Customer Satisfaction</h3>
                                <p className="feature-text">
                                    With a 98% satisfaction rate and hundreds of 5-star reviews, our customers
                                    love our service.
                                </p>
                            </div>
                            <div className="feature-item">
                                <span className="feature-number">06</span>
                                <h3 className="feature-title">Warranty on Work</h3>
                                <p className="feature-text">
                                    We stand behind our work with comprehensive warranties and satisfaction
                                    guarantees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="container">
                    <div className="about-cta-content">
                        <h2 className="about-cta-title">Experience the ProPlumb Difference</h2>
                        <p className="about-cta-subtitle">
                            Join thousands of satisfied customers who trust us for their plumbing needs
                        </p>
                        <div className="about-cta-buttons">
                            <a href="tel:+1-800-555-PLUMB" className="btn btn-primary btn-lg">
                                <span className="btn-icon">📞</span>
                                Call: 1-800-555-PLUMB
                            </a>
                            <a href="/contact" className="btn btn-secondary btn-lg">
                                Contact Us Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
