import AssetWrapper from "./assetWrapper";
import { useTheme } from "~/layouts/ThemeContext";
import TradingHistoryTable from "~/components/TradingHistory/trading-history";
import { Row, Col } from "react-bootstrap";
import historyData from "./historyData.json";

function TradePage() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "text-bg-dark bg-dark"
    : "text-bg-light bg-body";

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
          <TradingHistoryTable data={historyData} />
        </Col>
      </Row>
    </div>
  );
}
export default TradePage;
