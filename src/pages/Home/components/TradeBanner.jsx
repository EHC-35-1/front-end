import { Link } from "react-router-dom";

function TradeBanner() {
  return (
    <>
      <br></br>
      <div className="container">
        <h1 className="text-center">Start Trading Now</h1>
        <br></br>
        <div className="d-flex justify-content-center">
          <Link to="/trade" className="btn btn-warning">
            Trade Now
          </Link>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default TradeBanner;
