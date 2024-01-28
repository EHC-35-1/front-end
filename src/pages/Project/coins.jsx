const CoinsCards = ({ images }) => {
  const coins = [
    {
      image: images.bitCoinImage,
      description: "Bitcoin",
      alt: "Bitcoin's image",
    },
    {
      image: images.bnbImage,
      description: "Build and Build",
      alt: "Build and Build coin (Binance)'s image",
    },
    {
      image: images.usdcImage,
      description: "USD Coin",
      alt: "USD Coin's image",
    },
    {
      image: images.dogeImage,
      description: "Dogecoin",
      alt: "Dogecoin's image",
    },
  ];

  return (
    <div className="row">
      {coins.map((coin) => (
        <div key={coin.description} className="col-md mb-2 text-center">
          <figure>
            <img src={coin.image} style={{ width: "75%" }} alt={coin.alt} />
            <figcaption className="mt-2">{coin.description}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default CoinsCards;
