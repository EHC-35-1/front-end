import { FaGifts } from "react-icons/fa";

import Newsletter from "./components/Newsletter";
import GoogleCard from "./components/GoogleCard";

function Home() {
  return (
    <>
      <div className="text-bg-dark bg-dark">
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="display-3 font-weight-bold">
                <p className="text-warning">5</p>
                <p>USERS</p>
                <p>TRUST US</p>
              </div>
              <Newsletter />
              <p></p>
              <h5>
                <FaGifts /> Register now to get 4000 Hoe Coins in rewards
              </h5>
              <br></br>
              <p>
                <small>Or Connect With</small>
              </p>
              <GoogleCard />
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
