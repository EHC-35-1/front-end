const CoinsCards = ({ images }) => {
  const coins = [
    {
      image: images.bitCoinImage,
      description: "BitCoin",
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
    <div class="row">
      {coins.map((coin) => (
        <div key={coin.description} class="col-md mb-2 text-center">
          <figure>
            <img src={coin.image} width="75%" alt={coin.alt} />
            <figcaption class="mt-2">{coin.description}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default CoinsCards;
