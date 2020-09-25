import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="AppContainer u-VerticalCenter">
      <Container fluid="md">
        <Row>
          <Col className="layout">
            <Row>
              <Col>Type</Col>
            </Row>
            <Row>
              <Col>Length</Col>
            </Row>
            <Row>
              <Col>Thickness</Col>
            </Row>
            <Row>
              <Col>Diameter</Col>
            </Row>
            <Row>
              <Col>Amount</Col>
            </Row>
          </Col>
          <Col className="layout">Items</Col>
        </Row>
        <Row>
          <Col className="layout">Submit description</Col>
          <Col className="layout">Submit button</Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
