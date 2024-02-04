import AssetWrapper from "./assetWrapper";
import { useTheme } from "~/layouts/ThemeContext";
import TradingHistoryTable from "~/components/TradingHistory/trading-history";
import { Row, Col } from "react-bootstrap";

function TradePage() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "text-bg-dark bg-dark"
    : "text-bg-light bg-body";

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
    <div className={`mx-2 ${themeClass}`}>
      <AssetWrapper />
      <Row>
        <Col>
          <h2 className="text-center fw-bold">Transaction History</h2>
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
