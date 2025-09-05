import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive cloud solutions to optimize, secure, and scale your infrastructure</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          <div className="services-grid">
            <div className="service-card main">
              <div className="service-icon">💰</div>
              <h2>Cloud Cost Optimization</h2>
              <p>Reduce your cloud spending by up to 40% with our strategic optimization techniques and automated resource management.</p>
              <ul className="service-features">
                <li>Resource right-sizing and optimization</li>
                <li>Automated scaling and scheduling</li>
                <li>Reserved instance planning</li>
                <li>Cost monitoring and reporting</li>
                <li>Multi-cloud cost analysis</li>
              </ul>
              <div className="service-benefits">
                <div className="benefit">
                  <span className="benefit-number">40%</span>
                  <span className="benefit-text">Average Cost Reduction</span>
                </div>
                <div className="benefit">
                  <span className="benefit-number">24/7</span>
                  <span className="benefit-text">Cost Monitoring</span>
                </div>
              </div>
            </div>

            <div className="service-card main">
              <div className="service-icon">⚡</div>
              <h2>Cloud Application & Infrastructure Performance Tuning</h2>
              <p>Achieve 40X improvement in system performance through expert optimization and cloud infrastructure utilization.</p>
              <ul className="service-features">
                <li>Application performance analysis</li>
                <li>Database optimization and tuning</li>
                <li>Infrastructure scaling strategies</li>
                <li>Load balancing optimization</li>
                <li>Performance monitoring and alerting</li>
              </ul>
              <div className="service-benefits">
                <div className="benefit">
                  <span className="benefit-number">40X</span>
                  <span className="benefit-text">Performance Improvement</span>
                </div>
                <div className="benefit">
                  <span className="benefit-number">99.9%</span>
                  <span className="benefit-text">Uptime Guarantee</span>
                </div>
              </div>
            </div>

            <div className="service-card main">
              <div className="service-icon">🔒</div>
              <h2>Cloud Security Assessment</h2>
              <p>Strengthen your cloud security with comprehensive assessments, compliance checks, and advanced security protocols.</p>
              <ul className="service-features">
                <li>Security architecture review</li>
                <li>Compliance auditing (SOC2, ISO27001)</li>
                <li>Vulnerability assessments</li>
                <li>Identity and access management</li>
                <li>Security monitoring and incident response</li>
              </ul>
              <div className="service-benefits">
                <div className="benefit">
                  <span className="benefit-number">100%</span>
                  <span className="benefit-text">Compliance Coverage</span>
                </div>
                <div className="benefit">
                  <span className="benefit-number">24/7</span>
                  <span className="benefit-text">Security Monitoring</span>
                </div>
              </div>
            </div>

            <div className="service-card main">
              <div className="service-icon">🎓</div>
              <h2>Cloud Training Programs</h2>
              <p>Comprehensive training programs with live labs, certifications, and job support for DEVOPS, SYSOPS, and Architect roles.</p>
              <ul className="service-features">
                <li>Instructor-led live classes</li>
                <li>Hands-on lab sessions</li>
                <li>Concept and practical assessments</li>
                <li>Certification support (AWS/Azure/GCP)</li>
                <li>Job support and interview preparation</li>
              </ul>
              <div className="service-benefits">
                <div className="benefit">
                  <span className="benefit-number">95%</span>
                  <span className="benefit-text">Certification Success</span>
                </div>
                <div className="benefit">
                  <span className="benefit-number">100%</span>
                  <span className="benefit-text">Job Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Details */}
      <section className="training-details">
        <div className="container">
          <h2>Training Programs</h2>
          <div className="training-grid">
            <div className="training-card">
              <h3>DEVOPS Training</h3>
              <div className="training-duration">Duration: 8 weeks</div>
              <ul className="training-syllabus">
                <li>CI/CD Pipeline Development</li>
                <li>Containerization with Docker</li>
                <li>Kubernetes Orchestration</li>
                <li>Infrastructure as Code (Terraform)</li>
                <li>Monitoring and Logging</li>
                <li>Git and Version Control</li>
              </ul>
              <Link to="/training" className="training-link">View Full Syllabus →</Link>
            </div>

            <div className="training-card">
              <h3>SYSOPS Training</h3>
              <div className="training-duration">Duration: 10 weeks</div>
              <ul className="training-syllabus">
                <li>System Administration</li>
                <li>Cloud Infrastructure Management</li>
                <li>Networking and Security</li>
                <li>Backup and Disaster Recovery</li>
                <li>Performance Monitoring</li>
                <li>Automation and Scripting</li>
              </ul>
              <Link to="/training" className="training-link">View Full Syllabus →</Link>
            </div>

            <div className="training-card">
              <h3>Architect Training</h3>
              <div className="training-duration">Duration: 12 weeks</div>
              <ul className="training-syllabus">
                <li>Cloud Architecture Design</li>
                <li>Scalability and High Availability</li>
                <li>Security Architecture</li>
                <li>Cost Optimization Strategies</li>
                <li>Migration Planning</li>
                <li>Best Practices and Patterns</li>
              </ul>
              <Link to="/training" className="training-link">View Full Syllabus →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Assessment</h3>
              <p>Comprehensive analysis of your current infrastructure and requirements</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategy</h3>
              <p>Customized solution design and implementation roadmap</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>Expert execution with minimal downtime and maximum efficiency</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Optimization</h3>
              <p>Continuous monitoring, tuning, and improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Cloud Infrastructure?</h2>
            <p>Let our experts help you optimize, secure, and scale your cloud environment.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/training" className="btn btn-secondary">View Training</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
