import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const achievements = [
    { number: "73+", label: "Years of Excellence" },
    { number: "50+", label: "Expert Faculty" },
    { number: "1000+", label: "Students" },
    { number: "95%", label: "Employment Rate" }
  ];

  const announcements = [
    {
      title: "Enrollment Now Open",
      date: "2024",
      description: "First semester enrollment for Academic Year 2024-2025 is now open.",
      link: "/admission",
      buttonText: "Learn More"
    },
    {
      title: "Scholarship Applications",
      date: "2024",
      description: "Applications for academic scholarships are now being accepted.",
      link: "/admission",
      buttonText: "Apply Now"
    }
  ];

  return (
    <div className="full-width-container">
      {/* Hero Section with Parallax Effect */}
      <div 
        className="hero-section d-flex align-items-center" 
        style={{
          backgroundImage: 'url(/images/dcc1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          minHeight: '80vh'
        }}
      >
        <div 
          style={{
            backgroundColor: 'rgba(0, 100, 0, 0.7)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
        <Container className="position-relative">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="text-white">
                <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
                  Welcome to Davao Central College
                </h1>
                <p className="lead fs-4 mb-5 animate__animated animate__fadeInUp">
                  Empowering individuals imbued with Christian ideals for service
                </p>
                <div className="d-flex gap-3 justify-content-center animate__animated animate__fadeInUp">
                  <Link to="/admission">
                    <Button variant="primary" size="lg" className="px-4 py-2 rounded-pill">
                      Apply Now
                    </Button>
                  </Link>
                  <Link to="/programs">
                    <Button variant="outline-light" size="lg" className="px-4 py-2 rounded-pill">
                      Explore Programs
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <section className="content-section bg-light py-5">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-card">
                <div className="card-img-overlay-container">
                  <Card.Img 
                    variant="top" 
                    src="/images/dcc1.jpg" 
                    alt="Excellence in Education"
                    className="card-img-zoom"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-img-overlay bg-gradient-dark d-flex align-items-end">
                    <div className="text-white p-3">
                      <h3 className="h4">Excellence in Education</h3>
                      <p className="mb-0 small">Committed to providing high-quality education that prepares students for their future.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-card">
                <div className="card-img-overlay-container">
                  <Card.Img 
                    variant="top" 
                    src="/images/team naz.jpg" 
                    alt="Modern Facilities"
                    className="card-img-zoom"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-img-overlay bg-gradient-dark d-flex align-items-end">
                    <div className="text-white p-3">
                      <h3 className="h4">Modern Facilities</h3>
                      <p className="mb-0 small">State-of-the-art laboratories and classrooms equipped with the latest technology.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-card">
                <div className="card-img-overlay-container">
                  <Card.Img 
                    variant="top" 
                    src="/images/dcc faculty.png" 
                    alt="Expert Faculty"
                    className="card-img-zoom"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-img-overlay bg-gradient-dark d-flex align-items-end">
                    <div className="text-white p-3">
                      <h3 className="h4">Expert Faculty</h3>
                      <p className="mb-0 small">Learn from experienced professors dedicated to your success.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* President's Message Section */}
      <section className="content-section py-5">
        <Container>
          <h2 className="text-center mb-5">A Message from the School President</h2>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <Row className="align-items-center">
                    <Col md={4} className="text-center mb-4 mb-md-0">
                      <div className="president-image-container mb-3">
                        <img 
                          src="/images/President.jpg" 
                          alt="Dr. Ruben L. Dela Cruz"
                          className="rounded-circle img-fluid shadow-sm"
                          style={{ 
                            width: '200px',
                            height: '200px',
                            objectFit: 'cover',
                            border: '4px solid var(--primary-color)'
                          }}
                        />
                      </div>
                      <h4 className="mb-1">Dr. Ruben L. Dela Cruz</h4>
                      <p className="text-muted mb-0">PhD, RGC</p>
                      <p className="text-muted">School President</p>
                    </Col>
                    <Col md={8}>
                      <div className="president-message">
                        <p className="mb-4">Greetings of peace! Thank you for visiting the DCC Web page. It is our great pleasure to connect with you through this digital platform.</p>
                        
                        <p className="mb-4">This year 2021 DCC observes its 73rd founding anniversary since the school's inauguration in 1948. We praise and thank the Almighty God for the vision, passion and bold steps of our founder Director Salustiano Advincula to establish an educational institution just a few years after the devastations of World War II, where young girls and boys in this part of the Davao region will have access to excellent education especially those coming from the underprivileged families and sectors.</p>
                        
                        <p className="mb-4">The legacy of exemplary dedication of the school founder together with the unequivocal support of the pioneers continue to inspire the DCC family to work together forward in the mission of providing excellent and relevant education to all the learners in the context of local and national government development agenda and more importantly in the integral formation of learners to become God-loving and service-oriented individuals.</p>
                        
                        <p className="mb-0">We fervently hope that this network or site will serve your needs – our valued learners, clientele, stakeholders, and all others who navigate our school curricular programs and services at this new normal time of health pandemic and even beyond. It is our joy to be of service to you now and in the near future. Be a part of the growing DCCian community. Warm welcome.</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Announcements Section */}
      <section className="content-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Latest Announcements</h2>
          <Row className="g-4 justify-content-center">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm announcement-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle p-3 me-3">
                      <i className="fas fa-calendar-alt text-white"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">Enrollment Now Open</h4>
                      <p className="text-muted small mb-0">Academic Year 2024-2025</p>
                    </div>
                  </div>
                  <p className="mb-4">First semester enrollment for Academic Year 2024-2025 is now open. Secure your spot in our academic programs and begin your journey towards excellence.</p>
                  <Link to="/admission">
                    <Button variant="primary" size="sm" className="rounded-pill px-4">
                      Learn More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm announcement-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle p-3 me-3">
                      <i className="fas fa-graduation-cap text-white"></i>
                    </div>
                    <div>
                      <h4 className="mb-1">Scholarship Applications</h4>
                      <p className="text-muted small mb-0">2024 Academic Year</p>
                    </div>
                  </div>
                  <p className="mb-4">Applications for academic scholarships are now being accepted. Don't miss this opportunity to receive financial support for your education.</p>
                  <Link to="/admission">
                    <Button variant="primary" size="sm" className="rounded-pill px-4">
                      Apply Now
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section with Animation */}
      <section className="content-section bg-primary text-white py-5">
        <Container>
          <Row className="g-4 justify-content-center">
            {achievements.map((achievement, index) => (
              <Col xs={6} md={3} key={index} className="text-center">
                <div className="achievement-item">
                  <h3 className="display-4 fw-bold mb-2">{achievement.number}</h3>
                  <p className="mb-0">{achievement.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="content-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="mb-4">Ready to Start Your Journey?</h2>
              <p className="lead mb-4">Join our community of learners and achieve your academic goals with us.</p>
              <Link to="/contact">
                <Button variant="primary" size="lg" className="rounded-pill px-5">
                  Contact Us Today
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
