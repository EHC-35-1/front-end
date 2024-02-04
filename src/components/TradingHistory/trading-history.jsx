const TradingHistoryTable = ({ data }) => {
  const renderCellStyle = (value) => {
    const sideLowerCase = value.toLowerCase();
    const backgroundColor = sideLowerCase === "buy" ? "#46cf76" : "#F02F4A";
    return {
      backgroundColor,
    };
  };

  const columnNum = 5;
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
            <th>Asset Name</th>
            <th>Transaction Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.transactionHash}>
              <td style={renderCellStyle(row.transactionType)}>{row.time}</td>
              <td style={renderCellStyle(row.transactionType)}>
                {row.assetName}
              </td>
              <td style={renderCellStyle(row.transactionType)}>
                {row.transactionType}
              </td>
              <td style={renderCellStyle(row.transactionType)}>{row.amount}</td>
              <td style={renderCellStyle(row.transactionType)}>{row.status}</td>
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
// {
//   transactionHash: "0xabc123...",
//   time: "2024-02-03 10:30 AM",
//   assetName: "BTC",
//   transactionType: "Buy",
//   amount: 2.5,
//   status: "Completed",
// },
// {
//   transactionHash: "0xdef456...",
//   time: "2024-02-03 11:45 AM",
//   assetName: "ETH",
//   transactionType: "Sell",
//   amount: 5.0,
//   status: "Pending",
// },
// {
//   transactionHash: "0xghi789...",
//   time: "2024-02-03 01:15 PM",
//   assetName: "XRP",
//   transactionType: "Buy",
//   amount: 3.0,
//   status: "Completed",
// },
// ];

// function Example() {
//   return (
//     <>
//       <h1>Trading History</h1>
//       <TradingHistoryTable data={sampleData} />
//     </>
//   );
// }
