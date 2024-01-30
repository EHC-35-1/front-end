const CoinsCards = ({ images }) => {
    const coins = [
        {
            image: images.bitcoin,
            description: "Bitcoin",
            alt: "Bitcoin's image",
        },
        {
            image: images.bnb,
            description: "Build and Build",
            alt: "Build and Build coin (Binance)'s image",
        },
        {
            image: images.usdc,
            description: "USD Coin",
            alt: "USD Coin's image",
        },
        {
            image: images.doge,
            description: "Dogecoin",
            alt: "Dogecoin's image",
        },
    ];

    return (
        <div className="row">
            {coins.map((coin) => (
                <div key={coin.description} className="col-md mb-2 text-center">
                    <figure>
                        <img
                            src={coin.image}
                            style={{ width: "75%" }}
                            alt={coin.alt}
                        />
                        <figcaption className="mt-2">
                            {coin.description}
                        </figcaption>
                    </figure>
                </div>
            ))}
        </div>
    );
};

export default CoinsCards;
