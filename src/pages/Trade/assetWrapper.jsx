import { useState } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import { images } from "~/assets";
import DisplayAssetRow from "./displayAssetRow";
import assetData from "./assetData.json";

const AssetWrapper = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const modifiedAssetData = assetData.map((asset) => ({
    ...asset,
    imageSrc: getImage(asset.imageSrc),
  }));

  function getImage(imageName) {
    switch (imageName) {
      case "asset1":
        return images.asset1;
      default:
        return null;
    }
  }

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
      <DisplayAssetRow rowData={modifiedAssetData} searchTerm={searchTerm} />
    </Container>
  );
};

export default AssetWrapper;
