import {
  FaGifts,
  Newsletter,
  GoogleCard,
  PriceCard,
  NewsCard,
  ImageSlider,
  useTheme,
  FaQ,
} from "./ComponentImport";

function Home() {
  // eslint-disable-next-line no-unused-vars
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "text-bg-dark bg-dark"
    : "text-bg-light bg-body";
  return (
    <>
      <div className={themeClass}>
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
            <div className="col-lg-6">
              <PriceCard />
              <br></br>
              <NewsCard />
            </div>
          </div>
        </div>
        <br></br>
        <div className="container">
          <div className="row">
            <ImageSlider />
          </div>
        </div>
        <br></br>
        <div className="container">
          <FaQ />
        </div>
        <br></br>
      </div>
    </>
  );
}

export default Home;
