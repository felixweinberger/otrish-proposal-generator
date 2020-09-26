import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import Select from "react-select";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

import otrishLogo from "./images/otrish-logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const QUALITIES: Quality[] = [
  { label: "Bad", priceCents: 100, unit: "kg" },
  { label: "Normal", priceCents: 150, unit: "kg" },
  { label: "Nice", priceCents: 180, unit: "kg" },
  { label: "Super", priceCents: 210, unit: "kg" },
  { label: "Superduper", priceCents: 300, unit: "kg" },
];

interface Quality {
  label: string;
  priceCents: number;
  unit: string;
}

interface OrderItem {
  quality?: Quality;
  diameterMm?: number;
  thicknessMm?: number;
  lengthMm?: number;
  units?: number;
}

const getWeight = (diameterMm: number, thicknessMm: number): number => {
  return (diameterMm - thicknessMm) * thicknessMm * 0.0246615;
};

const isValidOrderItem = (orderItem: OrderItem): boolean => {
  const { quality, diameterMm, thicknessMm, lengthMm, units } = orderItem;
  return (
    quality !== undefined &&
    diameterMm !== undefined &&
    thicknessMm !== undefined &&
    lengthMm !== undefined &&
    units !== undefined
  );
};

const ItemSummary: React.FC<{ item: OrderItem }> = ({ item }) => {
  if (
    item.quality === undefined ||
    item.diameterMm === undefined ||
    item.thicknessMm === undefined ||
    item.lengthMm === undefined ||
    item.units === undefined
  ) {
    return null;
  }

  const totalLengthMeters = (item.lengthMm * item.units) / 1000;
  const totalWeight = getWeight(item.diameterMm, item.thicknessMm) * item.units;
  const totalPrice = (totalWeight * item.quality.priceCents) / 100;

  return (
    <>
      <hr />
      <div>Total length: {totalLengthMeters.toFixed(2)} m</div>
      <div>
        Total weight: {totalWeight.toFixed(2)} {item.quality.unit}
      </div>
      <div>Total price: €{totalPrice.toFixed(2)}</div>
    </>
  );
};

const App = () => {
  const [currentItem, setCurrentItem] = useState<OrderItem>({} as OrderItem);
  const [shouldDeliver, setShouldDeliver] = useState<boolean>(false);
  const [postCode, setPostCode] = useState<string>("80333");
  const [orderItems, setOrderItems] = useState<Array<OrderItem>>();

  const qualityOptions = QUALITIES.map((quality) => {
    const price = (quality.priceCents / 100).toFixed(2);
    return {
      label: `${quality.label} (€${price}/${quality.unit})`,
      value: quality,
    };
  });

  const handleQualityChange = (event: any) =>
    setCurrentItem({ ...currentItem, quality: event.value });

  const handleDiameterChange = (event: any) =>
    setCurrentItem({ ...currentItem, diameterMm: Number(event.target.value) });

  const handleThicknessChange = (event: any) =>
    setCurrentItem({ ...currentItem, thicknessMm: Number(event.target.value) });

  const handleLengthChange = (event: any) =>
    setCurrentItem({ ...currentItem, lengthMm: Number(event.target.value) });

  const handleUnitsChange = (event: any) =>
    setCurrentItem({ ...currentItem, units: Number(event.target.value) });

  const handleShouldDeliverChange = (event: any) =>
    setShouldDeliver(!shouldDeliver);

  const handlePostCodeChange = (event: any) => {
    console.log(">>> event", event);
  };

  return (
    <div className="AppContainer u-VerticalCenter">
      <Container fluid="md">
        <Row>
          <Col className="layout">
            <img src={otrishLogo} alt="Otrish Logo" height={200} />
          </Col>
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
                    <Form.Control type="number" onChange={handleLengthChange} />
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
                    <Form.Control type="number" onChange={handleUnitsChange} />
                    <InputGroup.Append>
                      <InputGroup.Text id="basic-addon2">units</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
              </Form.Group>

              <ItemSummary item={currentItem} />
              <hr />

              <Form.Group controlId="addItemFormShouldDeliver">
                <Form.Check
                  type="checkbox"
                  label="Should deliver?"
                  onChange={handleShouldDeliverChange}
                  defaultChecked={false}
                />
              </Form.Group>

              {shouldDeliver && (
                <Form.Group as={Row} controlId="addItemFormPostCode">
                  <Form.Label column sm="4">
                    Post code
                  </Form.Label>
                  <Col sm="8">
                    <InputGroup>
                      <Form.Control
                        type="string"
                        onChange={handlePostCodeChange}
                        defaultValue="80333"
                      />
                    </InputGroup>
                  </Col>
                </Form.Group>
              )}

              <Button variant="primary" type="submit" block>
                Add item
              </Button>
            </Form>
          </Col>
          <Col className="layout">
            <Row>Order items</Row>
            <Row>Summary</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
