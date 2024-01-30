import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../../layout/ThemeContext";

function PriceCard() {
    // eslint-disable-next-line no-unused-vars
    const { isDarkTheme, toggleTheme } = useTheme();
    const themeClass = isDarkTheme
        ? "text-bg-dark bg-secondary"
        : "text-bg-light bg-light";

    const [bitcoinData, setBitcoinData] = useState(null);
    const [ethereumData, setEthereumData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bitcoinResponse = await axios.get(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
                );
                setBitcoinData(bitcoinResponse.data.bitcoin);

                const ethereumResponse = await axios.get(
                    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
                );
                setEthereumData(ethereumResponse.data.ethereum);
            } catch (error) {
                console.error("Error fetching cryptocurrency data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={`card ${themeClass}`}>
                <div className="container">
                    <p>
                        {bitcoinData && (
                            <>
                                Bitcoin Price: ${bitcoinData.usd.toFixed(2)} USD
                                <br />
                                Up/Down Percentage:{" "}
                                {bitcoinData.usd_24h_change
                                    ? bitcoinData.usd_24h_change.toFixed(2)
                                    : "N/A"}
                                %
                            </>
                        )}
                    </p>
                    <p>
                        {ethereumData && (
                            <>
                                Ethereum Price: ${ethereumData.usd.toFixed(2)}{" "}
                                USD
                                <br />
                                Up/Down Percentage:{" "}
                                {ethereumData.usd_24h_change
                                    ? ethereumData.usd_24h_change.toFixed(2)
                                    : "N/A"}
                                %
                            </>
                        )}
                    </p>
                </div>
            </div>
        </>
    );
}

export default PriceCard;
