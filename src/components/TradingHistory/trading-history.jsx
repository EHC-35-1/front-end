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
    <div className="mt-3 table-responsive">
      <table className="table table-fixed">
        <colgroup>
          {[...Array(columnNum)].map((_, index) => (
            <col key={index} style={{ width: columnWidth }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th style={{ backgroundColor: "#2980b9", color: "#ffffff" }}>
              Time
            </th>
            <th style={{ backgroundColor: "#2980b9", color: "#ffffff" }}>
              Asset Name
            </th>
            <th style={{ backgroundColor: "#2980b9", color: "#ffffff" }}>
              Transaction Type
            </th>
            <th style={{ backgroundColor: "#2980b9", color: "#ffffff" }}>
              Amount
            </th>
            <th style={{ backgroundColor: "#2980b9", color: "#ffffff" }}>
              Status
            </th>
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
