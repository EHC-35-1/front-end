import { Row, Col } from "react-bootstrap";
import CardComponent from "./assetCard";

const DisplayAssetRow = ({ cardsData, searchTerm }) => {
  const filteredCards = searchTerm
    ? cardsData.filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : cardsData;

  return (
    <Row className="mb-3">
      {filteredCards.map((card, index) => (
        <Col key={index} md={3}>
          <CardComponent
            imageSrc={card.imageSrc}
            name={card.name}
            price={`${card.price}`}
            tvl={`TVL: ${card.tvl}`}
            volume={`Volume: ${card.volume}`}
            onBuyClick={() => console.log(`Buying ${card.name}`)}
          />
        </Col>
      ))}
    </Row>
  );
};

export default DisplayAssetRow;
