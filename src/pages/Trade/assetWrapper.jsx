import { images } from "~/assets";
import { Container } from "react-bootstrap";
import DisplayAssetRow from "./displayAssetRow";

const AssetWrapper = () => {
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
      <h2>Available Assets</h2>
      <DisplayAssetRow cardsData={firstRowData} />
      <DisplayAssetRow cardsData={secondRowData} />
    </Container>
  );
};

export default AssetWrapper;
