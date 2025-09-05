import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Training.css';

const Training = () => {
  const [activeTab, setActiveTab] = useState('devops');

  const trainingPrograms = {
    devops: {
      title: 'DEVOPS Training',
      duration: '8 weeks',
      level: 'Intermediate to Advanced',
      description: 'Master the art of DevOps with hands-on experience in CI/CD, containerization, and automation.',
      syllabus: [
        'Introduction to DevOps Culture and Practices',
        'Version Control with Git and GitHub',
        'CI/CD Pipeline Development (Jenkins, GitLab CI)',
        'Containerization with Docker',
        'Container Orchestration with Kubernetes',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Configuration Management (Ansible, Chef)',
        'Monitoring and Logging (Prometheus, Grafana, ELK Stack)',
        'Cloud Platforms (AWS, Azure, GCP)',
        'Security in DevOps (DevSecOps)',
        'Microservices Architecture',
        'Performance Testing and Optimization'
      ],
      certifications: ['AWS Certified DevOps Engineer', 'Azure DevOps Engineer Expert', 'Google Cloud Professional DevOps Engineer'],
      jobSupport: ['Resume Building', 'Interview Preparation', 'Mock Interviews', 'Industry Networking', 'Job Placement Assistance']
    },
    sysops: {
      title: 'SYSOPS Training',
      duration: '10 weeks',
      level: 'Beginner to Advanced',
      description: 'Become a cloud systems operations expert with comprehensive training in cloud infrastructure management.',
      syllabus: [
        'Cloud Computing Fundamentals',
        'Linux System Administration',
        'Windows Server Administration',
        'Networking Fundamentals (VPC, Subnets, Routing)',
        'Cloud Storage Solutions (S3, EBS, Azure Blob)',
        'Database Management (RDS, DynamoDB, Cosmos DB)',
        'Load Balancing and Auto Scaling',
        'Backup and Disaster Recovery',
        'Security and Compliance',
        'Monitoring and Alerting (CloudWatch, Azure Monitor)',
        'Automation and Scripting (Python, PowerShell)',
        'Cost Management and Optimization',
        'Troubleshooting and Performance Tuning',
        'High Availability and Fault Tolerance'
      ],
      certifications: ['AWS Certified SysOps Administrator', 'Azure Administrator Associate', 'Google Cloud Associate Cloud Engineer'],
      jobSupport: ['Resume Building', 'Interview Preparation', 'Mock Interviews', 'Industry Networking', 'Job Placement Assistance']
    },
    architect: {
      title: 'Architect Training',
      duration: '12 weeks',
      level: 'Advanced',
      description: 'Design and implement scalable, secure, and cost-effective cloud architectures for enterprise solutions.',
      syllabus: [
        'Cloud Architecture Design Principles',
        'Scalability and High Availability Patterns',
        'Security Architecture and Best Practices',
        'Cost Optimization Strategies',
        'Migration Planning and Execution',
        'Multi-Cloud and Hybrid Cloud Solutions',
        'Microservices and Serverless Architecture',
        'Data Architecture and Analytics',
        'Disaster Recovery and Business Continuity',
        'Compliance and Governance',
        'Performance Optimization',
        'DevOps Integration in Architecture',
        'Advanced Networking and Security',
        'Cloud-Native Application Design'
      ],
      certifications: ['AWS Certified Solutions Architect Professional', 'Azure Solutions Architect Expert', 'Google Cloud Professional Cloud Architect'],
      jobSupport: ['Resume Building', 'Interview Preparation', 'Mock Interviews', 'Industry Networking', 'Job Placement Assistance']
    }
  };

  const currentProgram = trainingPrograms[activeTab];

  return (
    <div className="training">
      {/* Hero Section */}
      <section className="training-hero">
        <div className="container">
          <h1>Cloud Training Programs</h1>
          <p>Master cloud technologies with our comprehensive training programs featuring live labs, expert instruction, and certification support.</p>
        </div>
      </section>

      {/* Training Overview */}
      <section className="training-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-icon">🎓</div>
              <h3>Instructor-Led Classes</h3>
              <p>Learn from industry experts with years of hands-on experience in cloud technologies.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">💻</div>
              <h3>Live Labs</h3>
              <p>Hands-on practice with real cloud environments and scenarios.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">📋</div>
              <h3>Assessments</h3>
              <p>Concept assessments and practical lab exams to validate your learning.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">🏆</div>
              <h3>Certification Support</h3>
              <p>Comprehensive support for AWS, Azure, and GCP certifications.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">💼</div>
              <h3>Job Support</h3>
              <p>Interview preparation, resume building, and job placement assistance.</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">📜</div>
              <h3>Certificate of Completion</h3>
              <p>Industry-recognized certificate upon successful completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="training-programs">
        <div className="container">
          <h2>Choose Your Training Path</h2>
          
          {/* Program Tabs */}
          <div className="program-tabs">
            <button 
              className={`tab-button ${activeTab === 'devops' ? 'active' : ''}`}
              onClick={() => setActiveTab('devops')}
            >
              DEVOPS
            </button>
            <button 
              className={`tab-button ${activeTab === 'sysops' ? 'active' : ''}`}
              onClick={() => setActiveTab('sysops')}
            >
              SYSOPS
            </button>
            <button 
              className={`tab-button ${activeTab === 'architect' ? 'active' : ''}`}
              onClick={() => setActiveTab('architect')}
            >
              ARCHITECT
            </button>
          </div>

          {/* Program Content */}
          <div className="program-content">
            <div className="program-header">
              <h3>{currentProgram.title}</h3>
              <div className="program-meta">
                <span className="duration">Duration: {currentProgram.duration}</span>
                <span className="level">Level: {currentProgram.level}</span>
              </div>
            </div>
            
            <p className="program-description">{currentProgram.description}</p>

            <div className="program-details">
              <div className="syllabus-section">
                <h4>Course Syllabus</h4>
                <ul className="syllabus-list">
                  {currentProgram.syllabus.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>

              <div className="certifications-section">
                <h4>Supported Certifications</h4>
                <ul className="certifications-list">
                  {currentProgram.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>

              <div className="job-support-section">
                <h4>Job Support Services</h4>
                <ul className="job-support-list">
                  {currentProgram.jobSupport.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="training-features">
        <div className="container">
          <h2>What Makes Our Training Special?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Expert Instructors</h3>
              <p>Learn from certified professionals with 10+ years of industry experience.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🖥️</div>
              <h3>Live Lab Environment</h3>
              <p>Access to real cloud environments for hands-on practice and experimentation.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your learning progress with detailed analytics and feedback.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h3>Peer Learning</h3>
              <p>Collaborate with fellow students in group projects and discussions.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Materials</h3>
              <p>Access to detailed study materials, practice tests, and reference guides.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Career Guidance</h3>
              <p>Personalized career guidance and mentorship throughout your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <h2>Training Investment</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>DEVOPS Training</h3>
              <div className="price">$1,299</div>
              <ul className="pricing-features">
                <li>8 weeks of intensive training</li>
                <li>Live instructor-led sessions</li>
                <li>Hands-on lab access</li>
                <li>Certification support</li>
                <li>Job placement assistance</li>
                <li>Certificate of completion</li>
              </ul>
              <Link to="/contact" className="pricing-button">Enroll Now</Link>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>SYSOPS Training</h3>
              <div className="price">$1,499</div>
              <ul className="pricing-features">
                <li>10 weeks of comprehensive training</li>
                <li>Live instructor-led sessions</li>
                <li>Hands-on lab access</li>
                <li>Multiple certification support</li>
                <li>Job placement assistance</li>
                <li>Certificate of completion</li>
              </ul>
              <Link to="/contact" className="pricing-button">Enroll Now</Link>
            </div>

            <div className="pricing-card">
              <h3>Architect Training</h3>
              <div className="price">$1,799</div>
              <ul className="pricing-features">
                <li>12 weeks of advanced training</li>
                <li>Live instructor-led sessions</li>
                <li>Hands-on lab access</li>
                <li>Professional certification support</li>
                <li>Job placement assistance</li>
                <li>Certificate of completion</li>
              </ul>
              <Link to="/contact" className="pricing-button">Enroll Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="training-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Cloud Journey?</h2>
            <p>Join thousands of professionals who have transformed their careers with our training programs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
