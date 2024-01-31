import { images } from "~/assets";

import CoinsCards from "./coins";
import { useTheme } from "~/layouts/ThemeContext";

function Project() {
    // eslint-disable-next-line no-unused-vars
    const { isDarkTheme, toggleTheme } = useTheme();
    const themeClass = isDarkTheme
        ? "text-bg-dark bg-dark"
        : "text-bg-light bg-body";
    const themeTitle = isDarkTheme
        ? "text-bg-dark bg-secondary"
        : "text-bg-light bg-light";
    return (
        <>
            <div className={`p-3 text-center ${themeTitle}`}>
                <h1 className="display-1 fw-bold">Project Insight</h1>
                <p>
                    In this page, you will learn about the basics of what the
                    project is centered about,
                    <br />
                    that are cryptocurrency and decentralized trading platform.
                </p>
            </div>
            <div className={themeClass}>
                <br></br>
            </div>
            <div className={themeClass}>
                <article className="container">
                    <h2 className="fw-bold">What is crytocurrency?</h2>
                    <p>
                        Cryptocurrency is a digital currency created using
                        encryption algorithms that serves as both a means of
                        payment and a virtual accounting system. It operates
                        independently of traditional banking systems, allowing
                        for secure peer-to-peer transactions around the world.
                        Unlike government-controlled fiat currencies,
                        cryptocurrencies have no central authority or central
                        bank. Transactions are recorded in a public ledger, and
                        cryptocurrency is stored in digital wallets. The use of
                        encryption ensures the security and safety of these
                        digital assets. The followings are some of its
                        characteristics:
                    </p>
                    <div className="row">
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div
                                className={`card d-flex flex-column h-100 ${themeTitle}`}
                            >
                                <div className="card-body">
                                    <img
                                        src={images.bank}
                                        alt="Spy"
                                        height="48"
                                        width="48"
                                    />
                                    <h3 className="card-title">
                                        No centralization
                                    </h3>
                                    <p className="card-text">
                                        Unlike traditional currencies, there are
                                        no central authorities governing the
                                        flow or valuation of cryptocurrencies.
                                        Virtual currency trading does not take
                                        place in a single, centralized location,
                                        which not only prevents disruptions from
                                        hacking attempts but also enhances
                                        security. Transaction data is
                                        distributed across the network and
                                        directly stored by cryptocurrency
                                        holders, resulting in a decentralized
                                        structure.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-3 mb-sm-0">
                            <div
                                className={`card d-flex flex-column h-100 ${themeTitle}`}
                            >
                                <div className="card-body">
                                    <img
                                        src={images.spy}
                                        alt="Spy"
                                        height="48"
                                        width="48"
                                    />
                                    <h3 className="card-title">Anonymity</h3>
                                    <p className="card-text">
                                        Each transaction associated with a
                                        randomly generated sequence of
                                        characters rather than identifiable
                                        personal or company data. The widespread
                                        adoption of certain virtual currencies
                                        demonstrates the demand for this privacy
                                        feature. Consequently, linking contracts
                                        to specific individuals or companies
                                        becomes nearly impossible, ensuring a
                                        high level of transactional anonymity in
                                        the cryptocurrency world.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div
                                className={`card d-flex flex-column h-100 ${themeTitle}`}
                            >
                                <div className="card-body">
                                    <img
                                        src={images.shield}
                                        alt="Spy"
                                        height="48"
                                        width="48"
                                    />
                                    <h3 className="card-title">Security</h3>
                                    <p className="card-text">
                                        Cryptocurrencies prioritize security
                                        through private key-secured digital
                                        wallets, while encryption on storage
                                        devices improves protection. Advanced
                                        cryptographic techniques further ensure
                                        transaction confidentiality, integrity,
                                        and authentication. Regular updates from
                                        the development team consistently
                                        reinforce security features. To ensure
                                        safety, users should adopt secure
                                        practices to protect their digital
                                        wallets from potential cyber threats.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={themeClass}>
                        <br></br>
                    </div>
                    <h2 className="fw-bold">How does it work?</h2>
                    <p>
                        Cryptocurrencies operate on a shared public record
                        called blockchain, keeping track of transactions by
                        currency holders. To create cryptocurrency units,
                        there's a process called mining where computers solve
                        complex math problems, generating coins. Alternatively,
                        users can buy these currencies from brokers and manage
                        them in cryptographic wallets for spending. When you own
                        cryptocurrency, you do not own something physical.
                        Instead, you have a key that allows you to transfer a
                        record or unit of measure between people without relying
                        on a trusted third party.
                    </p>
                    <h2 className="fw-bold">So... what is blockchain?</h2>
                    <p>
                        A blockchain is a database of transactions updated and
                        shared on many computers. Each group of transactions is
                        a "block." Public blockchains, like Ethereum, let anyone
                        add but not remove data. To cheat the system, someone
                        would have to change info on most network computers,
                        making decentralized blockchains very secure.
                    </p>
                    <div className="text-center">
                        <img
                            src={images.blockchain}
                            className="img-fluid rounded"
                            alt=""
                        />
                    </div>
                    <h2 className="fw-bold">Popular Example</h2>
                    <CoinsCards images={images} />
                    <div className={themeClass}>
                        <br></br>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="fw-bold">
                                Decentralized Trading Platform
                            </h2>
                            <p>
                                A decentralized trading platform, commonly
                                referred to as a decentralized exchange (DEX),
                                is a peer-to-peer marketplace that facilitates
                                direct transactions between cryptocurrency
                                buyers and sellers. Unlike centralized
                                exchanges, decentralized platforms operate on a
                                non-custodial basis, allowing users to keep
                                control of their private keys throughout
                                transactions. These platforms use smart
                                contracts, which are self-executing agreements
                                programmed to activate under predefined
                                conditions, to record transactions on the
                                blockchain. By eliminating the need for
                                intermediaries or custodians, decentralized
                                trading platforms facilitate trustless and
                                secure transactions, contributing to the growth
                                of the digital asset market and the emergence of
                                innovative financial products within the
                                decentralized finance (DeFi) ecosystem.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <img
                                src={images.dtp}
                                alt="Decentralized Trading Platform Image"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}

export default Project;
