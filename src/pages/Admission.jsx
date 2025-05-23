import { Container, Row, Col, Card } from 'react-bootstrap';

function Admission() {
  return (
    <Container className="py-4">
      <div className="page-header mb-4">
        <h1 className="mb-2">Admission & Enrollment</h1>
        <p className="lead mb-0">Take your first step towards excellence</p>
      </div>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="p-3">
              <h2 className="h4 mb-3">Requirements</h2>
              <ul className="small mb-0">
                <li>Completed application form</li>
                <li>Original copy of Form 137/138</li>
                <li>Certificate of Good Moral Character</li>
                <li>PSA Birth Certificate</li>
                <li>2x2 ID Pictures (4 pieces)</li>
                <li>Certificate of Transfer (for transferees)</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="p-3">
              <h2 className="h4 mb-3">Enrollment Process</h2>
              <ol className="small mb-0">
                <li>Submit all required documents</li>
                <li>Take the entrance examination</li>
                <li>Attend student orientation</li>
                <li>Pay enrollment fees</li>
                <li>Get class schedule</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body className="p-3">
              <h2 className="h4 mb-3">Scholarship Opportunities</h2>
              <p className="small mb-3">We offer various scholarship programs for deserving students:</p>
              <ul className="small mb-0">
                <li>Academic Excellence Scholarship</li>
                <li>Sports Scholarship</li>
                <li>Cultural Arts Scholarship</li>
                <li>Financial Aid Program</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Admission;
