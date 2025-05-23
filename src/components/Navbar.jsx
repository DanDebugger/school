import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <BsNavbar 
      expand="lg" 
      variant="dark" 
      sticky="top" 
      className="navbar" 
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={handleNavClick}>
          <div 
            className="logo-container rounded-circle overflow-hidden me-2" 
            style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'white',
              padding: '2px',
              border: '2px solid var(--secondary-color)'
            }}
          >
            <img 
              src="/images/dcc.jpg" 
              alt="Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }} 
            />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <span className="fs-5 fw-bold mb-0">Davao Central College</span>
            <span className="small text-light d-none d-md-inline" style={{ fontSize: '0.8rem', lineHeight: '1' }}>Excellence in Education</span>
          </div>
        </BsNavbar.Brand>

        <BsNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="border-0 shadow-none"
          style={{ padding: '0.5rem' }}
        />
        
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === "/"} 
              onClick={handleNavClick}
              className="mx-1 nav-link d-flex align-items-center"
            >
              <i className="fas fa-home me-2"></i>
              <span>Home</span>
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              active={location.pathname === "/about"} 
              onClick={handleNavClick}
              className="mx-1 nav-link d-flex align-items-center"
            >
              <i className="fas fa-info-circle me-2"></i>
              <span>About</span>
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/programs" 
              active={location.pathname === "/programs"} 
              onClick={handleNavClick}
              className="mx-1 nav-link d-flex align-items-center"
            >
              <i className="fas fa-graduation-cap me-2"></i>
              <span>Programs</span>
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/admission" 
              active={location.pathname === "/admission"} 
              onClick={handleNavClick}
              className="mx-1 nav-link d-flex align-items-center"
            >
              <i className="fas fa-user-plus me-2"></i>
              <span>Admission</span>
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              active={location.pathname === "/contact"} 
              onClick={handleNavClick}
              className="mx-1 nav-link d-flex align-items-center"
            >
              <i className="fas fa-envelope me-2"></i>
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
