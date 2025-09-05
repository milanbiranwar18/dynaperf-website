import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Optimize, Secure & Empower Your Cloud Infrastructure
            </h1>
            <p className="hero-subtitle">
              DynaPerf provides expert cloud management services to optimize performance, 
              reduce costs, and ensure data security, allowing you to focus on core business growth.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">Our Services</Link>
              <Link to="/contact" className="btn btn-secondary">Get Started</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="cloud-icon">☁️</div>
              <div className="performance-chart">
                <div className="chart-bar" style={{height: '60%'}}></div>
                <div className="chart-bar" style={{height: '80%'}}></div>
                <div className="chart-bar" style={{height: '100%'}}></div>
                <div className="chart-bar" style={{height: '70%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose DynaPerf?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Cost Optimization</h3>
              <p>Reduce cloud costs by up to 40% with our strategic optimization techniques and resource management.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Performance Tuning</h3>
              <p>Achieve 40X improvement in system performance through expert optimization and cloud infrastructure utilization.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Security Assessment</h3>
              <p>Strengthen your database security with advanced protocols and 24/7 monitoring support.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Expert Training</h3>
              <p>Comprehensive cloud training programs with live labs, certifications, and job support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Cloud Cost Optimization</h3>
              <p>Strategic cost reduction through resource optimization, right-sizing, and automated scaling.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <h3>Performance Tuning</h3>
              <p>Application and infrastructure optimization for maximum efficiency and scalability.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <h3>Security Assessment</h3>
              <p>Comprehensive security audits and compliance checks for your cloud infrastructure.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <h3>Cloud Training</h3>
              <p>DEVOPS, SYSOPS, and Architect training with live labs and certification support.</p>
              <Link to="/training" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40%</div>
              <div className="stat-label">Average Cost Reduction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime Guarantee</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Optimize Your Cloud Infrastructure?</h2>
            <p>Get started with our expert team and transform your cloud performance today.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Get Started Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
