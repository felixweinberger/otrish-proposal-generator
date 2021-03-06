import React, { useState } from "react";
import Select from "react-select";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

import otrishLogo from "./images/otrish-logo.png";
import { getDeliveryCost } from "./utils/deliveryCost";

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
  quality: Quality;
  diameterMm: number;
  thicknessMm: number;
  lengthMm: number;
  units: number;
}

interface FormState {
  quality?: Quality;
  diameterMm?: number;
  thicknessMm?: number;
  lengthMm?: number;
  units?: number;
}

const getWeight = (
  diameterMm: number,
  thicknessMm: number,
  lengthMm: number
): number => {
  return (
    (lengthMm / 1000) * (diameterMm - thicknessMm) * thicknessMm * 0.0246615
  );
};

const getOrderItemWeight = (orderItem: OrderItem): number => {
  return (
    getWeight(orderItem.diameterMm, orderItem.thicknessMm, orderItem.lengthMm) *
    orderItem.units
  );
};

const getOrderItemCost = (orderItem: OrderItem): number => {
  const itemWeight = getOrderItemWeight(orderItem);
  console.log(">>> orderItem", orderItem);
  return (itemWeight * orderItem.quality.priceCents) / 100;
};

const isValidFormState = (formState: FormState): boolean => {
  const { quality, diameterMm, thicknessMm, lengthMm, units } = formState;
  return (
    quality !== undefined &&
    diameterMm !== undefined &&
    thicknessMm !== undefined &&
    lengthMm !== undefined &&
    units !== undefined
  );
};

const FormItemSummary: React.FC<{ item: FormState }> = ({ item }) => {
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
  const totalWeight =
    getWeight(item.diameterMm, item.thicknessMm, item.lengthMm) * item.units;
  const totalPrice = (totalWeight * item.quality.priceCents) / 100;

  return (
    <>
      <hr />
      <div className="OrderSummaryRow-container">
        <div>Total length:</div>
        <div>{totalLengthMeters.toFixed(2)} m</div>
      </div>
      <div className="OrderSummaryRow-container">
        <div>Total weight:</div>
        <div>
          {totalWeight.toFixed(2)} {item.quality.unit}
        </div>
      </div>
      <div className="OrderSummaryRow-container">
        <div>Price:</div>
        <div>€ {totalPrice.toFixed(2)}</div>
      </div>
    </>
  );
};

const OrderItemDisplay: React.FC<{ item: OrderItem }> = ({ item }) => {
  const totalWeight =
    getWeight(item.diameterMm, item.thicknessMm, item.lengthMm) * item.units;
  const totalPrice = (totalWeight * item.quality.priceCents) / 100;
  return (
    <div className="OrderSummaryRow-container">
      <div>
        {item.units}x {item.quality.label} ({item.diameterMm}mm x{" "}
        {item.thicknessMm} mm x {item.lengthMm}mm)
      </div>
      <div>€ {totalPrice.toFixed(2)}</div>
    </div>
  );
};

const TotalPriceDisplay: React.FC<{
  orderItems: OrderItem[];
  shouldDeliver: boolean;
  postCode: string;
}> = ({ orderItems, shouldDeliver, postCode }) => {
  if (orderItems.length === 0) return null;

  const totalWeight = orderItems
    .map(getOrderItemWeight)
    .reduce((acc, weight) => acc + weight, 0);

  const totalMaterialCost = orderItems
    .map(getOrderItemCost)
    .reduce((acc, cost) => acc + cost, 0);

  const totalDeliveryCost = getDeliveryCost(
    totalWeight,
    postCode,
    shouldDeliver
  );

  const totalCost = totalMaterialCost + (totalDeliveryCost ?? 0);

  return (
    <>
      <hr />
      <div className="OrderSummaryRow-container">
        <div>Material:</div>
        <div>€ {totalMaterialCost.toFixed(2)}</div>
      </div>
      <div className="OrderSummaryRow-container">
        <div>Weight:</div>
        <div>{totalWeight.toFixed(2)} Kg</div>
      </div>
      {shouldDeliver && totalDeliveryCost && (
        <div className="OrderSummaryRow-container">
          <div>Delivery:</div>
          <div>€ {totalDeliveryCost.toFixed(2)}</div>
        </div>
      )}
      <div className="OrderSummaryRow-container">
        <div>Total:</div>
        <div>€ {totalCost.toFixed(2)}</div>
      </div>
      <hr />
    </>
  );
};

const App = () => {
  const [formState, setFormState] = useState<FormState>({} as FormState);
  const [shouldDeliver, setShouldDeliver] = useState<boolean>(false);
  const [postCode, setPostCode] = useState<string>("");
  const [orderItems, setOrderItems] = useState<Array<OrderItem>>([]);

  const qualityOptions = QUALITIES.map((quality) => {
    const price = (quality.priceCents / 100).toFixed(2);
    return {
      label: `${quality.label} (€${price}/${quality.unit})`,
      value: quality,
    };
  });

  const handleQualityChange = (event: any) =>
    setFormState({ ...formState, quality: event.value });

  const handleDiameterChange = (event: any) =>
    setFormState({ ...formState, diameterMm: Number(event.target.value) });

  const handleThicknessChange = (event: any) =>
    setFormState({ ...formState, thicknessMm: Number(event.target.value) });

  const handleLengthChange = (event: any) =>
    setFormState({ ...formState, lengthMm: Number(event.target.value) });

  const handleUnitsChange = (event: any) =>
    setFormState({ ...formState, units: Number(event.target.value) });

  const handleShouldDeliverChange = (event: any) =>
    setShouldDeliver(!shouldDeliver);

  const handlePostCodeChange = (event: any) => setPostCode(event.target.value);

  const handleAddItemClick = (event: any) => {
    event.preventDefault();
    if (!isValidFormState(formState)) return;
    setOrderItems([...orderItems, formState as OrderItem]);
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

              <FormItemSummary item={formState} />
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
                        maxLength={4}
                      />
                    </InputGroup>
                  </Col>
                </Form.Group>
              )}

              <Button
                variant="primary"
                type="button"
                block
                disabled={!isValidFormState(formState)}
                onClick={handleAddItemClick}
              >
                Add item
              </Button>
            </Form>
          </Col>
          <Col className="layout u-flex u-flexBetween u-flexDirectionColumn">
            <div>
              {orderItems.map((item) => (
                <Row>
                  <Col>
                    <OrderItemDisplay item={item} />
                  </Col>
                </Row>
              ))}
            </div>
            <div>
              <Row>
                <Col>
                  <TotalPriceDisplay
                    orderItems={orderItems}
                    shouldDeliver={shouldDeliver}
                    postCode={postCode}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
