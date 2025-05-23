import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-auto">
      <Container>
        <Row className="text-white g-3">
          <Col md={4}>
            <h4 className="mb-2">Davao Central College</h4>
            <p className="small mb-1">Empowering minds, shaping futures.</p>
            <p className="small mb-0">123 Education Street<br />
               Davao City, Philippines</p>
          </Col>
          <Col md={4}>
            <h4 className="mb-2">Quick Links</h4>
            <ul className="list-unstyled small mb-0">
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/programs" className="text-white text-decoration-none">Academic Programs</Link></li>
              <li><Link to="/admission" className="text-white text-decoration-none">Admission</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h4 className="mb-2">Contact Information</h4>
            <ul className="list-unstyled small mb-0">
              <li>Phone: (082) 123-4567</li>
              <li>Email: info@davaocentralcollege.edu.ph</li>
              <li>Office Hours: Mon-Fri 8:00 AM - 5:00 PM</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-2 opacity-25" />
        <div className="text-center text-white">
          <p className="small mb-0">&copy; {new Date().getFullYear()} Davao Central College. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
