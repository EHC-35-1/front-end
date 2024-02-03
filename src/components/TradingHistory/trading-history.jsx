const TradingHistoryTable = ({ data }) => {
  const renderRowStyle = (row) => {
    const sideLowerCase = row.side.toLowerCase();
    return {
      backgroundColor: sideLowerCase === "buy" ? "#46cf76" : "#F02F4A",
    };
  };

  const columnNum = 6;
  const columnWidth = `${100 / columnNum}%`;

  return (
    <div className="mt-4 table-responsive">
      <table className="table table-fixed">
        <colgroup>
          {[...Array(columnNum)].map((_, index) => (
            <col key={index} style={{ width: columnWidth }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th>Time</th>
            <th>Pair</th>
            <th>Side</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={renderRowStyle(row)}>{row.time}</td>
              <td style={renderRowStyle(row)}>{row.pair}</td>
              <td style={renderRowStyle(row)}>{row.side}</td>
              <td style={renderRowStyle(row)}>{row.price}</td>
              <td style={renderRowStyle(row)}>{row.amount}</td>
              <td style={renderRowStyle(row)}>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradingHistoryTable;

// Sample usage (import from another file):

// const sampleData = [
//   {
//     time: "2024-02-03 10:00:00",
//     pair: "BTC/USD",
//     side: "Buy",
//     price: 50000,
//     amount: 1,
//     total: 50000,
//   },
//   {
//     time: "2024-02-03 11:30:00",
//     pair: "ETH/USD",
//     side: "Sell",
//     price: 3000,
//     amount: 2,
//     total: 6000,
//   },
// ];

// function Example() {
//   return (
//     <>
//       <h1>Trading History</h1>
//       <TradingHistoryTable data={sampleData} />
//     </>
//   );
// }
