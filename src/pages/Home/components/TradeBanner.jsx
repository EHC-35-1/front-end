import { Link } from "react-router-dom";

function TradeBanner() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Start Trading Now</h1>
        <div className="d-flex justify-content-center">
          <Link to="/trade" className="btn btn-warning">
            Trade Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default TradeBanner;
