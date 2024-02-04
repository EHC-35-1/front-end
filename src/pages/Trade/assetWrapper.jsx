import { useState } from "react";
import { images } from "~/assets";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import DisplayAssetRow from "./displayAssetRow";

const AssetWrapper = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const firstRowData = [
    {
      imageSrc: images.asset1,
      name: "Asset 1",
      price: 20,
    },
    {
      imageSrc: images.asset1,
      name: "Asset 2",
      price: 30,
    },
    {
      imageSrc: images.asset1,
      name: "Asset 3",
      price: 25,
    },
    {
      imageSrc: images.asset1,
      name: "Asset 4",
      price: 40,
    },
  ];

  const secondRowData = [
    {
      imageSrc: images.asset1,
      name: "Asset 5",
      price: 50,
    },
    {
      imageSrc: images.asset1,
      name: "Asset 6",
      price: 35,
    },
    {
      imageSrc: images.asset1,
      name: "Asset 7",
      price: 45,
    },
    {
      imageSrc: images.asset1,
      name: "Asset 8",
      price: 55,
    },
  ];

  return (
    <Container className="justify-content-center text-center">
      <h2 className="fw-bold">Available Assets</h2>
      {/* Search Bar */}
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search assets..."
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
