import { Card, Button, Col, Row } from "react-bootstrap";

const CardComponent = ({ imageSrc, name, price, tvl, volume, onBuyClick }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Card style={{ width: "18rem", borderRadius: "15px" }}>
        <div
          style={{ height: "200px", overflow: "hidden", borderRadius: "15px" }}
        >
          <Card.Img
            variant="top"
            src={imageSrc}
            alt={name}
            style={{ objectFit: "cover", height: "100%", borderRadius: "15px" }}
          />
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Card.Title>{name}</Card.Title>
            </Col>
            <Col md={6} className="text-right">
              <Card.Text>${price}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card.Text>{tvl}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card.Text>{volume}</Card.Text>
            </Col>
          </Row>
          <Button variant="primary" onClick={onBuyClick}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
