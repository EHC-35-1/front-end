import * as images from "./images/images";
import CoinsCards from "./coins";

function Project() {
  return (
    <>
      <div class="text-bg-light p-3 text-center">
        <h1 class="display-1 fw-bold">Project Insight</h1>
        <p>
          In this page, you will learn about the basics of what the project is
          centered about,<br></br>that are cryptocurrency and decentralized
          trading platform.
        </p>
      </div>
      <article class="container">
        <h2>What is crytocurrency?</h2>
        <p>
          Crytocurrency is lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. id leo in vitae turpis. sit amet commodo nulla facilisi. The
          followings are some of its characteristics:
        </p>
        <div class="row">
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <img
                  src={images.bankImage}
                  alt="Spy"
                  height="48px"
                  width="48px"
                />
                <h3 class="card-title">No centralization</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <img
                  src={images.spyImage}
                  alt="Spy"
                  height="48px"
                  width="48px"
                />
                <h3 class="card-title">Anonymity</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img
                  src={images.shieldImage}
                  alt="Spy"
                  height="48px"
                  width="48px"
                />
                <h3 class="card-title">Security</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2>How does it work?</h2>
        <p>
          Cryptocurrencies operate on a shared public record called blockchain,
          keeping track of transactions by currency holders.
        </p>
        <p>
          To create cryptocurrency units, there's a process called mining where
          computers solve complex math problems, generating coins.
          Alternatively, users can buy these currencies from brokers and manage
          them in cryptographic wallets for spending.
        </p>
        <p>
          When you own cryptocurrency, you do not possess something physical.
          Instead, you have a key enabling you to transfer a record or unit of
          measure between people without relying on a trusted third party.
        </p>
        <h2>So... what is blockchain?</h2>

        <p>
          A blockchain is a database of transactions updated and shared on many
          computers. Each group of transactions is a "block." Public
          blockchains, like Ethereum, let anyone add but not remove data. To
          cheat the system, someone would have to change info on most network
          computers, making decentralized blockchains very secure.
        </p>
        <div class="text-center">
          <img src={images.blockChainGif} class="img-fluid rounded" alt="" />
        </div>
        <h2>Popular Example</h2>
        <CoinsCards images={images} />
        <h2>Decentralized Trading Platform</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </article>
    </>
  );
}

export default Project;
