import { Container, Row, Col, Card } from 'react-bootstrap';

function Programs() {
  const programs = [
    {
      title: "Basic Education Department",
      description: "Providing strong educational foundation from Kindergarten through Senior High School, focusing on holistic development and academic excellence.",
      image: "/images/BED-WEB.png",
      icon: "fa-school",
      features: [
        "Kindergarten",
        "Elementary Education",
        "Junior High School",
        "Senior High School (STEM, ABM, HUMSS, TVL)"
      ]
    },
    {
      title: "College of Business Administration",
      description: "Developing future business leaders with comprehensive knowledge in management, marketing, and finance.",
      image: "/images/BA.png",
      icon: "fa-chart-line",
      features: [
        "Bachelor of Science in Business Administration",
        "Major in Marketing Management",
        "Major in Financial Management",
        "Major in Human Resource Management"
      ]
    },
    {
      title: "College of Education and Liberal Arts",
      description: "Shaping educators and professionals who will inspire the next generation of learners.",
      image: "/images/CELA-WEB.png",
      icon: "fa-graduation-cap",
      features: [
        "Bachelor of Elementary Education",
        "Bachelor of Secondary Education",
        "Bachelor of Arts in English",
        "Bachelor of Arts in Social Science"
      ]
    },
    {
      title: "Criminal Justice Education",
      description: "Training future law enforcement professionals with strong ethical foundations and practical skills.",
      image: "/images/CJE.png",
      icon: "fa-gavel",
      features: [
        "Bachelor of Science in Criminology",
        "Law Enforcement Administration",
        "Crime Detection and Investigation",
        "Correctional Administration"
      ]
    },
    {
      title: "Hospitality Management Education",
      description: "Preparing students for successful careers in the global hospitality and tourism industry.",
      image: "/images/HM.png",
      icon: "fa-concierge-bell",
      features: [
        "Bachelor of Science in Hospitality Management",
        "Food and Beverage Services",
        "Hotel and Restaurant Management",
        "Events Management"
      ]
    },
    {
      title: "Information Technology Education",
      description: "Developing tech-savvy professionals ready for the digital age with cutting-edge IT skills.",
      image: "/images/ITE.png",
      icon: "fa-laptop-code",
      features: [
        "Bachelor of Science in Information Technology",
        "Web Development and Programming",
        "Network and Systems Administration",
        "Database Management"
      ]
    }
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
          backgroundAttachment: 'fixed',
          position: 'relative',
          minHeight: '400px'
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
            <h1 className="display-4 fw-bold mb-4">Academic Programs</h1>
            <p className="lead fs-4 mb-0">Discover Your Path to Excellence</p>
          </div>
        </Container>
      </div>

      {/* Programs Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {programs.map((program, index) => (
              <Col lg={6} key={index}>
                <Card className="h-100 program-card border-0 shadow-sm">
                  <div className="program-image-container bg-white p-4">
                    <Card.Img 
                      variant="top" 
                      src={program.image} 
                      alt={program.title}
                      className="program-image"
                      style={{ 
                        height: '200px',
                        objectFit: 'contain',
                        maxWidth: '100%',
                        padding: '1rem'
                      }}
                    />
                    <div className="program-overlay">
                      <div className="program-icon">
                        <i className={`fas ${program.icon} fa-3x`}></i>
                      </div>
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <div className="program-title-container">
                      <div className="program-icon-small bg-primary rounded-circle me-3">
                        <i className={`fas ${program.icon} text-white`}></i>
                      </div>
                      <h2 className="h3 mb-3">{program.title}</h2>
                    </div>
                    <p className="text-muted mb-4">{program.description}</p>
                    <div className="program-features">
                      <h3 className="h5 mb-3">Program Offerings:</h3>
                      <ul className="list-unstyled">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="mb-2">
                            <i className="fas fa-check-circle text-primary me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Programs;