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
      assetName: "EtherToken (ETH)",
      transactionType: "Buy",
      amount: "2.5 ETH",
      status: "Completed",
    },
    {
      transactionHash: "0xdef456...",
      time: "2024-02-03 11:45 AM",
      assetName: "BitcoinToken (BTC)",
      transactionType: "Sell",
      amount: "0.5 BTC",
      status: "Pending",
    },
    {
      transactionHash: "0xghi789...",
      time: "2024-02-03 01:15 PM",
      assetName: "TokenDogecoin (DOGE)",
      transactionType: "Buy",
      amount: "300 DOGE",
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
