import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: "🚨",
            title: "Emergency Plumbing",
            description: "Available 24/7 for urgent plumbing emergencies including burst pipes, severe leaks, gas leaks, and flooding. Our rapid response team is always ready to help.",
            features: ["24/7 availability", "30-minute response time", "Emergency repairs", "Water damage prevention"]
        },
        {
            icon: "🚰",
            title: "Drain Cleaning & Unclogging",
            description: "Professional drain cleaning services using advanced equipment like hydro-jetting and video inspection to clear stubborn blockages and restore proper flow.",
            features: ["Kitchen sink drains", "Bathroom drains", "Main sewer lines", "Storm drains"]
        },
        {
            icon: "🚽",
            title: "Toilet Repair & Installation",
            description: "Expert toilet services including repairs, replacements, and new installations. We work with all major brands and can handle any toilet issue.",
            features: ["Leak repairs", "Running toilets", "Clogs & backups", "New installations"]
        },
        {
            icon: "💧",
            title: "Leak Detection & Repair",
            description: "Using state-of-the-art leak detection technology, we quickly locate and repair hidden leaks before they cause serious damage to your property.",
            features: ["Hidden leak detection", "Pipe leak repairs", "Slab leak repairs", "Water line repairs"]
        },
        {
            icon: "🔥",
            title: "Water Heater Services",
            description: "Complete water heater services including installation, repair, and maintenance for both tank and tankless systems. Energy-efficient upgrades available.",
            features: ["Tank water heaters", "Tankless systems", "Repairs & maintenance", "Energy efficiency upgrades"]
        },
        {
            icon: "🔧",
            title: "Pipe Repair & Replacement",
            description: "Professional pipe services including repairs, repiping, and replacements. We work with copper, PVC, PEX, and other materials to ensure long-lasting results.",
            features: ["Pipe repairs", "Whole-home repiping", "Frozen pipe repairs", "Pipe insulation"]
        },
        {
            icon: "🚿",
            title: "Fixture Installation",
            description: "Expert installation of faucets, sinks, showers, bathtubs, and other plumbing fixtures. We ensure proper installation for optimal performance.",
            features: ["Faucet installation", "Sink installation", "Shower & tub installation", "Fixture upgrades"]
        },
        {
            icon: "⚙️",
            title: "Commercial Plumbing",
            description: "Comprehensive commercial plumbing services for businesses, restaurants, offices, and industrial facilities. Scheduled maintenance and emergency repairs.",
            features: ["Business plumbing", "Restaurant plumbing", "Preventive maintenance", "Code compliance"]
        },
        {
            icon: "🏠",
            title: "Residential Plumbing",
            description: "Complete residential plumbing services for homes of all sizes. From routine maintenance to major installations, we're your trusted home plumbing partner.",
            features: ["New construction", "Home renovations", "Routine maintenance", "Upgrades & improvements"]
        },
        {
            icon: "🔍",
            title: "Video Camera Inspection",
            description: "Advanced video camera inspection services to diagnose problems in pipes and sewer lines without invasive digging. See exactly what's wrong.",
            features: ["Sewer line inspection", "Drain diagnostics", "Pre-purchase inspections", "Detailed video reports"]
        },
        {
            icon: "💦",
            title: "Sump Pump Services",
            description: "Installation, repair, and maintenance of sump pumps to protect your basement from flooding. Battery backup systems available.",
            features: ["Sump pump installation", "Repairs & replacement", "Battery backup systems", "Testing & maintenance"]
        },
        {
            icon: "🌿",
            title: "Water Treatment Systems",
            description: "Improve your water quality with professional water treatment solutions including softeners, filters, and purification systems.",
            features: ["Water softener installation", "Filtration systems", "Reverse osmosis", "Water testing"]
        }
    ];

    return (
        <div className="services-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Plumbing Services</h1>
                    <p className="page-subtitle">
                        Professional plumbing solutions for every need. From emergency repairs to scheduled
                        installations, we've got you covered.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-detail-card">
                                <div className="service-card-header">
                                    <div className="service-icon-large">{service.icon}</div>
                                    <h3 className="service-card-title">{service.title}</h3>
                                </div>
                                <p className="service-card-description">{service.description}</p>
                                <ul className="service-features-list">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span className="feature-check">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="/contact" className="service-cta-link">
                                    Get a Quote →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section section-why">
                <div className="container">
                    <div className="why-content">
                        <h2 className="why-title">Why Choose Our Services?</h2>
                        <div className="why-grid">
                            <div className="why-item">
                                <span className="why-icon">✓</span>
                                <h4>Experienced Technicians</h4>
                                <p>Licensed and certified plumbers with years of experience</p>
                            </div>
                            <div className="why-item">
                                <span className="why-icon">✓</span>
                                <h4>Upfront Pricing</h4>
                                <p>No hidden fees - you know the cost before we start</p>
                            </div>
                            <div className="why-item">
                                <span className="why-icon">✓</span>
                                <h4>Quality Workmanship</h4>
                                <p>We stand behind our work with warranties and guarantees</p>
                            </div>
                            <div className="why-item">
                                <span className="why-icon">✓</span>
                                <h4>Fast Response</h4>
                                <p>Same-day service available for most plumbing needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="services-cta-section">
                <div className="container">
                    <div className="services-cta-content">
                        <h2 className="services-cta-title">Ready to Get Started?</h2>
                        <p className="services-cta-subtitle">
                            Contact us today for a free quote on any of our plumbing services
                        </p>
                        <div className="services-cta-buttons">
                            <a href="tel:+1-800-555-PLUMB" className="btn btn-primary btn-lg">
                                <span className="btn-icon">📞</span>
                                Call: 1-800-555-PLUMB
                            </a>
                            <a href="/contact" className="btn btn-secondary btn-lg">
                                Request a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
