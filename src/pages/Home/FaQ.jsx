import "./faq.css";
import { useTheme } from "~/layouts/ThemeContext";

function FaQ() {
    const { isDarkTheme, toggleTheme } = useTheme();
    const themeClass = isDarkTheme ? "dark" : "light";

    return (
        <>
            <div className="faq-section page-wrap" data-bs-theme={themeClass}>
                <h2 className="text-center">Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                Question 1: What is a cryptocurrency exchange?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <span className="text-warning">
                                    Cryptocurrency
                                </span>{" "}
                                exchanges are digital marketplaces that enable
                                users to buy and sell cryptocurrencies like{" "}
                                <span className="text-warning">
                                    Bitcoin, Ethereum, and Tether
                                </span>
                                . The Binance exchange is the largest crypto
                                exchange by trade volume.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Question 2: How to track cryptocurrency prices
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                The easiest way to track the latest
                                cryptocurrency prices, trading volumes, trending
                                altcoins, and market cap is the{" "}
                                <span className="text-warning">
                                    Binance Cryptocurrency Directory
                                </span>
                                . Click on the coins to know historical coin
                                prices, 24-hour trading volume, and the price of
                                cryptocurrencies like{" "}
                                <span className="text-warning">
                                    Bitcoin, Ethereum, BNB
                                </span>{" "}
                                and others in real-time.
                            </div>
                        </div>
                    </div>
                    {/* <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Question 3:
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">qs3-ans</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Question 4:
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">qs4-ans</div>
            </div>
          </div> */}
                </div>
            </div>
        </>
    );
}

export default FaQ;
