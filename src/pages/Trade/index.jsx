import AssetWrapper from "./assetWrapper";
import TradingHistoryTable from "~/components/TradingHistory/trading-history";
import { Row, Col } from "react-bootstrap";

function TradePage() {
  const sampleData = [
    {
      transactionHash: "0xabc123...",
      time: "2024-02-03 10:30 AM",
      assetName: "Methapmin Prenium Image",
      transactionType: "Buy",
      amount: "2.5 MTTP",
      status: "Completed",
    },
    {
      transactionHash: "0xdef456...",
      time: "2024-02-03 11:45 AM",
      assetName: "Rare Elgoog logo",
      transactionType: "Sell",
      amount: "5.0 MTTP",
      status: "Pending",
    },
    {
      transactionHash: "0xghi789...",
      time: "2024-02-03 01:15 PM",
      assetName: "Doge meme",
      transactionType: "Buy",
      amount: "3.0 MTTP",
      status: "Completed",
    },
  ];

  return (
    <div className="mt-4 mx-2">
      <AssetWrapper />
      <Row>
        <Col>
          <h2>Transaction History</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <TradingHistoryTable data={sampleData} />
        </Col>
      </Row>
    </div>
  );
}
export default TradePage;
