import { useState } from "react";
import { images } from "~/assets";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import DisplayAssetRow from "./displayAssetRow";

const AssetWrapper = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const firstRowData = [
    {
      imageSrc: images.asset1,
      name: "Token A",
      price: 20,
      tvl: "100M",
      volume: "50M",
    },
    {
      imageSrc: images.asset1,
      name: "Token B",
      price: 30,
      tvl: "150M",
      volume: "40M",
    },
    {
      imageSrc: images.asset1,
      name: "Token C",
      price: 25,
      tvl: "80M",
      volume: "60M",
    },
    {
      imageSrc: images.asset1,
      name: "Token D",
      price: 40,
      tvl: "120M",
      volume: "70M",
    },
  ];

  const secondRowData = [
    {
      imageSrc: images.asset1,
      name: "Token E",
      price: 50,
      tvl: "200M",
      volume: "90M",
    },
    {
      imageSrc: images.asset1,
      name: "Token F",
      price: 35,
      tvl: "110M",
      volume: "30M",
    },
    {
      imageSrc: images.asset1,
      name: "Token G",
      price: 45,
      tvl: "130M",
      volume: "80M",
    },
    {
      imageSrc: images.asset1,
      name: "Token H",
      price: 55,
      tvl: "180M",
      volume: "65M",
    },
  ];

  return (
    <Container className="justify-content-center text-center">
      <h2 className="fw-bold">Available Tokens</h2>
      {/* Search Bar */}
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Tokens..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      {/* Asset Rows */}
      <DisplayAssetRow cardsData={firstRowData} searchTerm={searchTerm} />
      <DisplayAssetRow cardsData={secondRowData} searchTerm={searchTerm} />
    </Container>
  );
};

export default AssetWrapper;
