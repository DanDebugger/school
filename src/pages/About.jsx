import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  const goals = [
    "Strengthen the total development of persons",
    "Develop a self-sustained community",
    "Cultivate the value of patriotism",
    "Promote a global standard of education",
    "Intensify faculty development program",
    "Cultivate a strong research culture",
    "Upgrade physical plant and facilities"
  ];

  const coreValues = [
    { title: 'Discipline', icon: 'fa-gavel', desc: 'Maintaining order and following principles that guide our actions' },
    { title: 'Competence', icon: 'fa-award', desc: 'Striving for excellence in all our endeavors' },
    { title: 'Compassion', icon: 'fa-heart', desc: 'Showing care and understanding towards others' },
    { title: 'Integrity', icon: 'fa-shield-alt', desc: 'Upholding moral and ethical principles in all situations' }
  ];

  return (
    <div className="full-width-container">
      {/* Hero Section */}
      <div 
        className="hero-section" 
        style={{
          backgroundImage: 'url(/images/dcc1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          minHeight: '400px',
          marginTop: '0'
        }}
      >
        <div 
          style={{
            backgroundColor: 'rgba(0, 100, 0, 0.8)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
        <Container className="position-relative">
          <div className="text-white text-center py-5">
            <h1 className="display-3 fw-bold mb-4">About Davao Central College</h1>
            <p className="lead fs-4 mb-0">Building futures through excellence in education since 1994</p>
          </div>
        </Container>
      </div>

      {/* Vision & Mission Section */}
      <section className="content-section bg-light py-5 mt-0">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary rounded-circle p-3 me-3">
                      <i className="fas fa-eye text-white fs-4"></i>
                    </div>
                    <h2 className="mb-0">Our Vision</h2>
                  </div>
                  <p className="fs-5">Empowered individuals imbued with Christian ideals for service.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary rounded-circle p-3 me-3">
                      <i className="fas fa-bullseye text-white fs-4"></i>
                    </div>
                    <h2 className="mb-0">Our Mission</h2>
                  </div>
                  <p className="fs-5 mb-3">We commit ourselves to:</p>
                  <ul className="fs-5 list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-primary me-2"></i>
                      Provide integral formation of students
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-primary me-2"></i>
                      Develop God-loving and community service-oriented individuals
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-primary me-2"></i>
                      Promote competence through quality instruction and research for nation building
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Goals Section */}
      <section className="content-section py-5">
        <Container>
          <h2 className="text-center mb-5">Our Goals</h2>
          <Row className="g-4">
            {goals.map((goal, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center">
                      <div className="bg-primary rounded-circle p-3 me-3" style={{ minWidth: '50px', height: '50px' }}>
                        <span className="text-white fw-bold">{index + 1}</span>
                      </div>
                      <p className="fs-5 mb-0">{goal}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="content-section bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Our Core Values</h2>
          <Row className="g-4">
            {coreValues.map((value, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="h-100 border-0 shadow-sm text-center">
                  <Card.Body className="p-4">
                    <div className="rounded-circle bg-primary text-white mx-auto mb-4 d-flex align-items-center justify-content-center" 
                         style={{ width: '80px', height: '80px' }}>
                      <i className={`fas ${value.icon} fs-2`}></i>
                    </div>
                    <h4 className="mb-3">{value.title}</h4>
                    <p className="mb-0">{value.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* History Section */}
      <section className="history-section py-5">
        <Container>
          <h2 className="text-center mb-5">Our History</h2>
          <Row className="align-items-center g-4 mb-5">
            <Col lg={6}>
              <div className="position-relative">
                <img 
                  src="/images/team naz.jpg" 
                  alt="College History" 
                  className="img-fluid rounded-3 shadow"
                  style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white" 
                     style={{ background: 'linear-gradient(transparent, rgba(0,100,0,0.8))' }}>
                  <h3 className="h5 mb-0">Team Byte Bandits - Hack4Gov National Finals</h3>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="p-4">
                <h3 className="h3 mb-4 text-primary">A Legacy of Excellence</h3>
                <div className="timeline">
                  <div className="timeline-item mb-4">
                    <div className="d-flex">
                      <div className="timeline-marker me-3">
                        <div className="rounded-circle bg-primary p-2">
                          <i className="fas fa-star text-white"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="h5 mb-2">1994 - Foundation</h4>
                        <p>Davao Central College was established with a vision to provide quality education in Davao City.</p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item mb-4">
                    <div className="d-flex">
                      <div className="timeline-marker me-3">
                        <div className="rounded-circle bg-primary p-2">
                          <i className="fas fa-graduation-cap text-white"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="h5 mb-2">2000 - Program Expansion</h4>
                        <p>Introduced new academic programs to meet the growing demands of the industry.</p>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item mb-4">
                    <div className="d-flex">
                      <div className="timeline-marker me-3">
                        <div className="rounded-circle bg-primary p-2">
                          <i className="fas fa-award text-white"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="h5 mb-2">2023 - National Recognition</h4>
                        <p>Our students achieved Rank 5/20 in the Hack4Gov National Finals, showcasing our commitment to excellence.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;