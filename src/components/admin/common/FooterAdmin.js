import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterAdmin() {
  return (
    <footer className="adminFooter">
      <Container fluid>
        <Row>
          <Col className="text-center py-1">
            <span style={{ color: "#fff" }}>2024 © Copyright 7 Steps Transformation. All Rights Reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterAdmin;