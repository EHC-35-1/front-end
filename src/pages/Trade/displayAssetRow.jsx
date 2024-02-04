import { Row, Col } from "react-bootstrap";
import CardComponent from "./assetCard";

const DisplayAssetRow = ({ cardsData }) => {
  return (
    <Row className="mb-3">
      {cardsData.map((card, index) => (
        <Col key={index} md={3}>
          <CardComponent
            imageSrc={card.imageSrc}
            name={card.name}
            price={`${card.price} ${card.coinSymbol}`}
            onBuyClick={() => console.log(`Buying ${card.name}`)}
          />
        </Col>
      ))}
    </Row>
  );
};

export default DisplayAssetRow;
