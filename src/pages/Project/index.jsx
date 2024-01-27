import bankImage from "./bank.svg";
import spyImage from "./spy.svg";
import shieldImage from "./shield.svg";

function Project() {
  return (
    <>
      <div class="text-bg-light p-3 text-center">
        <h1 class="display-1 fw-bold">Project Insight</h1>
        <p>
          In this page, you will learn about the basics of what the project is
          centered about,<br></br>which is cryptocurrency and decentralized
          trading platform.
        </p>
      </div>
      <h2>What is crytocurrency?</h2>
      <p>
        Crytocurrency is lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        id leo in vitae turpis. sit amet commodo nulla facilisi. The followings
        are some of its characteristics:
      </p>
      <div class="row">
        <div class="col-sm-4 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <img src={bankImage} alt="Spy" height="48px" width="48px" />
              <h3 class="card-title">No centralization</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <img src={spyImage} alt="Spy" height="48px" width="48px" />
              <h3 class="card-title">Anonymity</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <img src={shieldImage} alt="Spy" height="48px" width="48px" />
              <h3 class="card-title">Security</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2>How does it work?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h2>Decentralized Trading Platform</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </>
  );
}

export default Project;
