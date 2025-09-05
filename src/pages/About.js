import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About DynaPerf</h1>
          <p>Your trusted partner in cloud transformation and optimization</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to democratize cloud expertise, DynaPerf has been at the forefront 
                of cloud transformation since our inception. We believe that every organization, regardless 
                of size, should have access to world-class cloud optimization and training services.
              </p>
              <p>
                Our journey began when our founders, having spent years in enterprise cloud environments, 
                recognized the gap between cloud potential and actual implementation. Too many organizations 
                were struggling with high costs, security vulnerabilities, and performance issues simply 
                because they lacked the right expertise and guidance.
              </p>
              <p>
                Today, DynaPerf stands as a beacon of cloud excellence, having helped hundreds of 
                organizations optimize their infrastructure, reduce costs, and scale efficiently. 
                Our commitment to continuous learning and innovation drives us to stay ahead of 
                the rapidly evolving cloud landscape.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower organizations with cutting-edge cloud solutions that drive efficiency, 
                security, and growth. We are committed to delivering exceptional value through 
                innovative optimization strategies and comprehensive training programs.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>
                To be the global leader in cloud transformation, setting the standard for 
                excellence in cloud optimization, security, and education. We envision a 
                world where every organization can leverage cloud technology to its full potential.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Excellence, Innovation, Integrity, and Customer Success are the cornerstones 
                of everything we do. We believe in building lasting partnerships based on 
                trust, transparency, and mutual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Meet Our Expert Team</h2>
          <p className="team-intro">
            Our team consists of certified cloud professionals with extensive experience 
            in enterprise environments and a passion for helping organizations succeed.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h4>Alex Johnson</h4>
              <p className="member-role">CEO & Cloud Architect</p>
              <p className="member-bio">
                15+ years in cloud architecture. Former AWS Solutions Architect with expertise 
                in large-scale migrations and cost optimization.
              </p>
              <div className="member-certifications">
                <span className="cert">AWS Certified Solutions Architect Professional</span>
                <span className="cert">Azure Solutions Architect Expert</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h4>Sarah Chen</h4>
              <p className="member-role">CTO & DevOps Expert</p>
              <p className="member-bio">
                DevOps pioneer with 12+ years experience. Specializes in CI/CD pipelines, 
                containerization, and automation strategies.
              </p>
              <div className="member-certifications">
                <span className="cert">AWS Certified DevOps Engineer</span>
                <span className="cert">Kubernetes Certified Administrator</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar">👨‍🔧</div>
              <h4>Michael Rodriguez</h4>
              <p className="member-role">Lead Security Engineer</p>
              <p className="member-bio">
                Cybersecurity expert with 10+ years in cloud security. Former security 
                consultant for Fortune 500 companies.
              </p>
              <div className="member-certifications">
                <span className="cert">CISSP</span>
                <span className="cert">AWS Certified Security Specialist</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar">👩‍🎓</div>
              <h4>Emily Watson</h4>
              <p className="member-role">Training Director</p>
              <p className="member-bio">
                Education specialist with 8+ years in technical training. Expert in 
                curriculum development and certification preparation.
              </p>
              <div className="member-certifications">
                <span className="cert">AWS Certified Trainer</span>
                <span className="cert">Microsoft Certified Trainer</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h4>David Kim</h4>
              <p className="member-role">Performance Engineer</p>
              <p className="member-bio">
                Performance optimization specialist with 9+ years experience. Expert in 
                database tuning and application performance.
              </p>
              <div className="member-certifications">
                <span className="cert">AWS Certified Database Specialist</span>
                <span className="cert">MongoDB Certified Developer</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h4>Lisa Thompson</h4>
              <p className="member-role">Cost Optimization Specialist</p>
              <p className="member-bio">
                Financial cloud expert with 7+ years in cost optimization. Specializes 
                in multi-cloud cost analysis and resource optimization.
              </p>
              <div className="member-certifications">
                <span className="cert">AWS Certified Cloud Practitioner</span>
                <span className="cert">FinOps Certified Practitioner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="certifications">
        <div className="container">
          <h2>Certifications & Partnerships</h2>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-icon">🏆</div>
              <h4>AWS Advanced Consulting Partner</h4>
              <p>Recognized for our expertise in AWS solutions and customer success</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🔒</div>
              <h4>ISO 27001 Certified</h4>
              <p>Information security management system certification</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">✅</div>
              <h4>SOC 2 Type II Compliant</h4>
              <p>Security, availability, and confidentiality compliance</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🎓</div>
              <h4>Microsoft Gold Partner</h4>
              <p>Azure expertise and training partner</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">☁️</div>
              <h4>Google Cloud Partner</h4>
              <p>Certified GCP training and consulting partner</p>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🔧</div>
              <h4>Kubernetes Certified</h4>
              <p>Official Kubernetes training and consulting partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose DynaPerf?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">🎯</div>
              <h3>Proven Results</h3>
              <p>Track record of 40% average cost reduction and 40X performance improvement for our clients.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">👥</div>
              <h3>Expert Team</h3>
              <p>Certified professionals with 10+ years of experience in enterprise cloud environments.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🛡️</div>
              <h3>Security First</h3>
              <p>ISO 27001 and SOC 2 certified with comprehensive security assessment services.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📚</div>
              <h3>Comprehensive Training</h3>
              <p>Industry-leading training programs with 95% certification success rate.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🔄</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock support with 99.9% uptime guarantee and proactive monitoring.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Transparent pricing with no hidden costs and guaranteed ROI on our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work with Us?</h2>
            <p>Join hundreds of organizations that trust DynaPerf for their cloud transformation journey.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
