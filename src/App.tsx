import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import Select from "react-select";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

interface Quality {
  label: string;
  priceCents: number;
  unit: string;
}

interface OrderItem {
  quality?: Quality;
  diameterMm?: number;
  thicknessMm?: number;
  lengthMm: number;
  units: number;
}

const App = () => {
  const [currentItem, setCurrentItem] = useState<OrderItem>({
    lengthMm: 1000,
    units: 1,
  });
  const [orderItems, setOrderItems] = useState<Array<OrderItem>>();

  const handleQualityChange = (event: any) => {
    currentItem.quality = event.value;
    setCurrentItem(currentItem);
  };

  const handleDiameterChange = (event: any) => {
    event.preventDefault();
    currentItem.diameterMm = Number(event.target.value);
    setCurrentItem(currentItem);
  };

  const handleThicknessChange = (event: any) => {
    event.preventDefault();
    currentItem.thicknessMm = Number(event.target.value);
    setCurrentItem(currentItem);
  };

  const handleLengthChange = (event: any) => {
    event.preventDefault();
    currentItem.lengthMm = Number(event.target.value);
    setCurrentItem(currentItem);
  };

  const handleUnitsChange = (event: any) => {
    event.preventDefault();
    currentItem.units = Number(event.target.value);
    setCurrentItem(currentItem);
  };

  const qualities: Quality[] = [
    { label: "Bad", priceCents: 100, unit: "kg" },
    { label: "Normal", priceCents: 150, unit: "kg" },
    { label: "Nice", priceCents: 180, unit: "kg" },
    { label: "Super", priceCents: 210, unit: "kg" },
    { label: "Superduper", priceCents: 300, unit: "kg" },
  ];

  const qualityOptions = qualities.map((quality) => {
    const price = (quality.priceCents / 100).toFixed(2);
    return {
      label: `${quality.label} (€${price}/${quality.unit})`,
      value: quality,
    };
  });

  return (
    <div className="AppContainer u-VerticalCenter">
      <Container fluid="md">
        <Row>
          <Col className="layout">Logo</Col>
        </Row>
        <Row>
          <Col className="layout">
            <Form className="AddItemForm">
              <Form.Group as={Row} controlId="addItemFormQuality">
                <Form.Label column sm="4">
                  Quality
                </Form.Label>
                <Col sm="8">
                  <Select
                    options={qualityOptions}
                    onChange={handleQualityChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="addItemFormDiameter">
                <Form.Label column sm="4">
                  Diameter
                </Form.Label>
                <Col sm="8">
                  <InputGroup>
                    <Form.Control
                      type="number"
                      step="0.01"
                      onChange={handleDiameterChange}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">mm</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="addItemFormThickness">
                <Form.Label column sm="4">
                  Thickness
                </Form.Label>
                <Col sm="8">
                  <InputGroup>
                    <Form.Control
                      type="number"
                      step="0.01"
                      onChange={handleThicknessChange}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">mm</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="addItemFormLength">
                <Form.Label column sm="4">
                  Length
                </Form.Label>
                <Col sm="8">
                  <InputGroup>
                    <Form.Control
                      type="number"
                      onChange={handleLengthChange}
                      defaultValue={1000}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">mm</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="addItemFormUnits">
                <Form.Label column sm="4">
                  Units
                </Form.Label>
                <Col sm="8">
                  <InputGroup>
                    <Form.Control
                      type="number"
                      onChange={handleUnitsChange}
                      defaultValue={1}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">units</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Form.Group>

              {/* TODO: add total length, weight and price */}

              {/* TODO: button greyed out unless have price and weight */}
              <Button variant="primary" type="submit" block>
                Add item
              </Button>
            </Form>
          </Col>
          <Col className="layout">Items</Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
