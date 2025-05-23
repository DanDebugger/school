import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container className="py-4">
      <div className="page-header mb-4">
        <h1 className="mb-2">Contact Us</h1>
        <p className="lead mb-0">We'd love to hear from you</p>
      </div>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="p-3">
              <h2 className="h4 mb-3">Get in Touch</h2>
              <div>
                <h3 className="h5 mb-2">Address</h3>
                <p className="mb-3">123 Education Street, Davao City, Philippines</p>

                <h3 className="h5 mb-2">Phone</h3>
                <p className="mb-3">(082) 123-4567</p>

                <h3 className="h5 mb-2">Email</h3>
                <p className="mb-3">info@davaocentralcollege.edu.ph</p>

                <h3 className="h5 mb-2">Office Hours</h3>
                <p className="mb-0">Monday - Friday: 8:00 AM - 5:00 PM</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className="p-3">
              <h2 className="h4 mb-3">Send us a Message</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="small">Name</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="small">Email</Form.Label>
                  <Form.Control size="sm" type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="small">Subject</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Enter subject" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="small">Message</Form.Label>
                  <Form.Control size="sm" as="textarea" rows={3} placeholder="Enter your message" required />
                </Form.Group>

                <Button variant="primary" type="submit" size="sm" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
